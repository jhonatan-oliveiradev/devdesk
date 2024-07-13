"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { ModalContext } from "@/providers/modal";
import { api } from "@/lib/api";

import { TicketsModel } from "@/utils/tickets.type";
import { CustomerModel } from "@/utils/customer.type";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";

import { CheckIcon, FileIcon, CheckCheckIcon } from "lucide-react";

interface TicketItemProps {
  ticket: TicketsModel;
  customer: CustomerModel | null;
}

const InnerTableBody = ({ customer, ticket }: TicketItemProps) => {
  const { handleModalVisible, setTicketDetails } = useContext(ModalContext);

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

  const handleOpenTicketInfoModal = () => {
    handleModalVisible();
    setTicketDetails({ ticket, customer });
  };

  return (
    <TableRow>
      <TableCell className="font-medium">{customer?.name}</TableCell>
      <TableCell>{ticket.createdAt?.toLocaleDateString("pt-br")}</TableCell>
      <TableCell>
        <Badge variant={ticket.status === "ABERTO" ? "success" : "secondary"}>
          {ticket.status}
        </Badge>
      </TableCell>
      <TableCell className="flex items-center justify-end gap-2 text-right">
        <Button
          onClick={handleOpenTicketInfoModal}
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
