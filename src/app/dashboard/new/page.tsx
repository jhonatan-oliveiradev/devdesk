import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

import Container from "@/components/container";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { ChevronLeft } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function NewTicketPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  const customers = await prisma.customer.findMany({
    where: {
      userId: session.user.id,
    },
  });

  const handleRegisterTicket = async (formData: FormData) => {
    "use server";

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const customerId = formData.get("customer") as string;

    if (!name || !description || !customerId) {
      return;
    }

    await prisma.ticket.create({
      data: {
        name,
        description,
        customerId,
        status: "ABERTO",
        userId: session?.user.id,
      },
    });

    redirect("/dashboard");
  };

  return (
    <Container className="flex-col">
      <div className="flex items-center gap-2">
        <Button asChild>
          <Link href="/dashboard">
            <ChevronLeft size="16" />
            Voltar
          </Link>
        </Button>
      </div>
      <h2 className="my-8 text-2xl font-bold">Novo chamado</h2>

      <form className="flex flex-col space-y-8" action={handleRegisterTicket}>
        <div>
          <Label className="">Nome</Label>
          <Input
            name="name"
            className="mt-2"
            type="text"
            placeholder="Digite o nome do chamado"
            required
          />
        </div>
        <div>
          <Label className="mb-2">Descreva o problema</Label>
          <Textarea
            name="description"
            className="mt-2 h-24 resize-none"
            placeholder="Dê o máximo de detalhes possível."
            required
          />
        </div>
        {customers.length !== 0 && (
          <div>
            <Label className="mb-2">Selecione o cliente</Label>
            <Select name="customer">
              <SelectTrigger className="mt-2 w-[280px]">
                <SelectValue placeholder="Selecione o cliente" />
              </SelectTrigger>
              <SelectContent>
                {customers.map((customer) => (
                  <SelectItem key={customer.id} value={customer.id}>
                    {customer.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {customers.length === 0 && (
          <div className="flex flex-col gap-2 text-sm">
            <p className="italic text-muted-foreground">
              Você ainda não possui clientes cadastrados.
            </p>
            <Link href="/dashboard/customer/new">
              <span className="transition-all hover:text-primary hover:underline">
                Cadastre um cliente
              </span>
              .
            </Link>
          </div>
        )}

        <div>
          <Button
            type="submit"
            className="w-full disabled:cursor-not-allowed disabled:opacity-50"
            disabled={customers.length === 0}
          >
            Abrir chamado
          </Button>
        </div>
      </form>
    </Container>
  );
}
