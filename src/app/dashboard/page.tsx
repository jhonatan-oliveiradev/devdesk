import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

import Link from "next/link";
import Container from "@/components/container";
import TableContent from "./components/table-content";
import { Button } from "@/components/ui/button";

import { PlusIcon } from "lucide-react";
import prisma from "@/lib/prisma";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  const firstName = session.user.name?.split(" ")[0] ?? "";

  const tickets = await prisma.ticket.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      customer: true,
    },
  });

  return (
    <Container>
      <div className="mt-2">
        <p>Bem-vindo, {firstName}!</p>

        <div className="my-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Chamados</h2>
          <Button className="flex w-fit px-4" size="icon">
            <Link href="/dashboard/new" className="flex items-center gap-2">
              <PlusIcon size="16" />
              Abrir chamado
            </Link>
          </Button>
        </div>

        <TableContent />
      </div>
    </Container>
  );
}
