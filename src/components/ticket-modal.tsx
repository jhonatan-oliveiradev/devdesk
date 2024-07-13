"use client";

import { useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Separator } from "./ui/separator";
import { ModalContext } from "@/providers/modal";
import { Badge } from "./ui/badge";

const TicketModal = () => {
  const { handleModalVisible, ticket } = useContext(ModalContext);

  function formatPhoneNumber(phoneNumber: string | undefined) {
    if (!phoneNumber) return "";
    const phoneStr = phoneNumber.toString();
    if (phoneStr.length !== 11) return phoneNumber;

    const areaCode = phoneStr.slice(0, 2);
    const firstPart = phoneStr.slice(2, 7);
    const secondPart = phoneStr.slice(7);

    return `(${areaCode}) ${firstPart} ${secondPart}`;
  }

  const formattedPhone = formatPhoneNumber(ticket?.customer?.phone);

  return (
    <Dialog open onOpenChange={handleModalVisible}>
      <DialogContent>
        <DialogHeader>
          <div className="space-y-4">
            <div>
              <DialogTitle>Detalhes do chamado</DialogTitle>
              <DialogDescription>
                Confira aqui as informações deste chamado.
              </DialogDescription>
            </div>
            <div className="flex flex-wrap">
              <p>
                <span className="mr-1 font-semibold text-primary">Nome:</span>
                {ticket?.ticket.name}
              </p>
            </div>
            <div>
              <p>
                <span className="mr-1 font-semibold text-primary">
                  Descrição:
                </span>
                {ticket?.ticket.description}
              </p>
            </div>
            <div className="flex flex-col items-center justify-between md:flex-row">
              <p className="text-sm">
                <span className="mr-1 font-semibold text-primary">Status:</span>
                <Badge
                  className="text-xs"
                  variant={
                    ticket?.ticket.status === "ABERTO" ? "success" : "secondary"
                  }
                >
                  {ticket?.ticket.status}
                </Badge>
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="mr-1 font-semibold">Aberto em:</span>
                {ticket?.ticket.createdAt?.toLocaleDateString("pt-br")}
              </p>
            </div>
            <Separator />
          </div>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <DialogTitle>Detalhes do cliente</DialogTitle>
            <DialogDescription>Informações deste cliente.</DialogDescription>
          </div>
          <div className="flex flex-wrap">
            <p>
              <span className="mr-1 font-semibold text-primary">Nome:</span>
              {ticket?.customer?.name}
            </p>
          </div>
          <div>
            <p>
              <span className="mr-1 font-semibold text-primary">Email:</span>
              {ticket?.customer?.email}
            </p>
          </div>
          <div>
            <p>
              <span className="mr-1 font-semibold text-primary">Telefone:</span>
              {formattedPhone}
            </p>
          </div>
          {ticket?.customer?.address && (
            <div>
              <p>
                <span className="mr-1 font-semibold text-primary">
                  Endereço:
                </span>
                {ticket?.customer?.address}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TicketModal;
