import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

import InnerTableBody from "./inner-table-body";

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TableContent = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  const tickets = await prisma.ticket.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      customer: true,
    },
  });

  return (
    <Table className="min-w-full">
      <TableCaption className="text-xs italic text-muted-foreground">
        Lista de chamados.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Cliente</TableHead>
          <TableHead>Data Cadastro</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">#</TableHead>
        </TableRow>
      </TableHeader>

      {tickets.length === 0 ? (
        <TableBody>
          <TableRow>
            <td
              colSpan={4}
              className="px-2 py-4 text-center text-muted-foreground"
            >
              Nenhum chamado encontrado.
            </td>
          </TableRow>
        </TableBody>
      ) : (
        <TableBody>
          {tickets.map((ticket) => (
            <InnerTableBody
              key={ticket.id}
              ticket={ticket}
              customer={ticket.customer}
            />
          ))}
        </TableBody>
      )}
    </Table>
  );
};

export default TableContent;
