"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import TicketForm from "./components/ticket-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { SearchIcon, X } from "lucide-react";

const schema = z.object({
  email: z
    .string()
    .email("Digite o nome do cliente para realizar a busca.")
    .min(1, "Campo obrigatório"),
});

type FormData = z.infer<typeof schema>;

export interface CustomerDataInfo {
  id: string;
  name: string;
}

export default function OpenTicketPage() {
  const [customer, setCustomer] = useState<CustomerDataInfo | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const clearCustomerField = () => {
    setCustomer(null);
    form.setValue("email", "");
  };

  const searchCustomer = async (data: FormData) => {
    try {
      const response = await api.get("/api/customer", {
        params: {
          email: data.email,
        },
      });

      if (response.data === null) {
        form.setError("email", {
          type: "custom",
          message: "Ops, este cliente não foi encontrado...",
        });

        return;
      }

      if (response.data) {
        setCustomer({ id: response.data.id, name: response.data.name });
      } else {
        console.error("Customer not found.");
      }
    } catch (error) {
      console.error("Failed to fetch customer:", error);
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl px-2">
      <h1 className="mt-24 text-center text-3xl font-bold">Abrir chamado</h1>

      <section className="mb-2 mt-4 flex flex-col">
        {customer ? (
          <Card>
            <div className="space-y-2 p-8">
              <div className="flex items-center justify-between">
                <p className="text-lg">
                  <span className="font-bold text-primary">
                    Cliente selecionado:
                  </span>{" "}
                  {customer.name}
                </p>
                <Button
                  onClick={clearCustomerField}
                  className="bg-rose-600 hover:bg-rose-700"
                  size="icon"
                >
                  <X className="size-4" />
                </Button>
              </div>
            </div>
          </Card>
        ) : (
          <Card>
            <Form {...form}>
              <form
                className="space-y-6 p-8"
                onSubmit={form.handleSubmit(searchCustomer)}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email do Cliente</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Digite o e-mail do cliente..."
                          {...field}
                        />
                      </FormControl>
                      {form.formState.errors.email && (
                        <FormMessage>
                          {form.formState.errors.email.message}
                        </FormMessage>
                      )}
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 font-semibold"
                >
                  <SearchIcon className="size-4" />
                  Procurar cliente
                </Button>
              </form>
            </Form>
          </Card>
        )}

        {customer !== null && <TicketForm customer={customer} />}
      </section>
    </div>
  );
}
