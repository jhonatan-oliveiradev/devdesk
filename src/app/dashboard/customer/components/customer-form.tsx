"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CustomerModel } from "@/utils/customer.type";

const schema = z.object({
  name: z
    .string()
    .min(2, "O campo nome é obrigatório.")
    .max(50, "O nome deve ter no máximo 50 caracteres."),
  email: z
    .string()
    .email("Digite um e-mail válido.")
    .min(2, "O e-mail é obrigatório.")
    .max(50, "O e-mail deve ter no máximo 50 caracteres."),
  phone: z.string().refine(
    (value) => {
      return (
        /^\(\d{2}\)\s9\d{4}[-\s]?\d{4}$/.test(value) ||
        /^\d{2}\s\d{9}$/.test(value) ||
        /^\d{11}$/.test(value)
      );
    },
    {
      message: "O telefone deve se parecer com isto: (99) 99999-9999",
    },
  ),
  address: z.string(),
});

type FormData = z.infer<typeof schema>;

const CustomerForm = ({
  customer,
  onSubmit,
}: {
  customer?: CustomerModel;
  onSubmit: (data: FormData) => void;
}) => {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: customer?.name || "",
      email: customer?.email || "",
      phone: customer?.phone || "",
      address: customer?.address || "",
    },
  });

  return (
    <Form {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col space-y-8"
      >
        <FormField
          control={methods.control}
          name="name"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Nome completo</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ex: Mercado Silva"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    methods.trigger("name");
                  }}
                />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="flex-1">
            <FormField
              control={methods.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ex: exemplo@dominio.com"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        methods.trigger("email");
                      }}
                    />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className="flex-1">
            <FormField
              control={methods.control}
              name="phone"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ex: (99) 99999-9999"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        methods.trigger("phone");
                      }}
                    />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={methods.control}
          name="address"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Endereço</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ex: Rua Exemplo, 123"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    methods.trigger("address");
                  }}
                />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />
        <Button type="submit">Salvar</Button>
      </form>
    </Form>
  );
};

export default CustomerForm;
