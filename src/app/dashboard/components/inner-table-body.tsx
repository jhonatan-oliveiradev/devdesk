"use client";

import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckIcon, FileIcon, CheckCheckIcon } from "lucide-react";
import { TicketsModel } from "@/utils/tickets.type";
import { CustomerModel } from "@/utils/customer.type";
import { TableCell, TableRow } from "@/components/ui/table";

interface TicketItemProps {
  ticket: TicketsModel;
  customer: CustomerModel | null;
}

const InnerTableBody = ({ customer, ticket }: TicketItemProps) => {
  const router = useRouter();
  const [icon, setIcon] = useState("CheckIcon");

  const handleChangeStatus = async () => {
    try {
      const response = await api.patch("/api/ticket", {
        id: ticket.id,
      });

      setIcon("CheckCheckIcon");
    } catch (err) {
      console.error(err);
    } finally {
      router.refresh();
    }
  };

  const bgStatusColor = () => {
    if (ticket.status === "ABERTO") {
      return "green-500";
    } else if (ticket.status === "ANDAMENTO") {
      return "yellow-500";
    } else if (ticket.status === "APROVAÇÃO") {
      return "purple-500";
    } else if (ticket.status === "FINALIZADO") {
      return "primary";
    } else {
      return "zinc-700";
    }
  };

  return (
    <TableRow>
      <TableCell className="font-medium">{customer?.name}</TableCell>
      <TableCell>{ticket.createdAt?.toLocaleDateString("pt-br")}</TableCell>
      <TableCell>
        <Badge
          className={`bg-${bgStatusColor()} hover:bg-${bgStatusColor()}/80`}
        >
          {ticket.status}
        </Badge>
      </TableCell>
      <TableCell className="flex items-center justify-end gap-2 text-right">
        <Button
          size="icon"
          variant="ghost"
          className="bg-blue-600 text-white hover:bg-blue-600/80 hover:text-white"
        >
          <FileIcon size="16" />
        </Button>
        <Button size="icon" onClick={handleChangeStatus}>
          {icon === "CheckIcon" ? (
            <CheckIcon size="16" />
          ) : (
            <CheckCheckIcon size="16" />
          )}
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default InnerTableBody;
