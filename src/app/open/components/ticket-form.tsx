"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";

import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Loader2 } from "lucide-react";
import { CustomerDataInfo } from "../page";
import { useRouter } from "next/navigation";

const schema = z.object({
  name: z.string().min(1, "Campo obrigatório"),
  description: z.string().min(1, "Descreva um pouco sobre seu problema..."),
});

type FormData = z.infer<typeof schema>;

interface TicketFormProps {
  customer: CustomerDataInfo;
}

const TicketForm = ({ customer }: TicketFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await api.post("/api/ticket", {
        name: data.name,
        description: data.description,
        customerId: customer.id,
      });

      form.setValue("name", "");
      form.setValue("description", "");
    } catch (error) {
      console.error("Failed to submit form:", error);
    } finally {
      setIsLoading(false);
      toast({
        title: "Feito!",
        description: "Chamado aberto com sucesso.",
      });

      router.push("/");
    }
  };

  return (
    <Card className="mt-8">
      <Form {...form}>
        <form className="space-y-6 p-8" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do chamado</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o nome do chamado" {...field} />
                </FormControl>
                {form.formState.errors.name && (
                  <FormMessage>
                    {form.formState.errors.name.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descreva o problema</FormLabel>
                <FormControl>
                  <Textarea
                    className="h-24 resize-none"
                    placeholder="Digite uma descrição para o chamado"
                    {...field}
                  />
                </FormControl>
                {form.formState.errors.description && (
                  <FormMessage>
                    {form.formState.errors.description.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full font-bold"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="size-5 animate-spin duration-500" />
            ) : (
              "Cadastrar"
            )}
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default TicketForm;
