"use client";

import { createContext, ReactNode, useState } from "react";

import { TicketsModel } from "@/utils/tickets.type";
import { CustomerModel } from "@/utils/customer.type";

import TicketModal from "@/components/ticket-modal";

interface ModalContextData {
  visible: boolean;
  handleModalVisible: () => void;
  ticket: TicketInfo | undefined;
  setTicketDetails: (detail: TicketInfo) => void;
}

interface TicketInfo {
  ticket: TicketsModel;
  customer: CustomerModel | null;
}

export const ModalContext = createContext({} as ModalContextData);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const [ticket, setTicket] = useState<TicketInfo>();

  function handleModalVisible() {
    setVisible(!visible);
  }

  function setTicketDetails(detail: TicketInfo) {
    setTicket(detail);
  }

  return (
    <ModalContext.Provider
      value={{
        visible,
        handleModalVisible,
        setTicketDetails,
        ticket,
      }}
    >
      {visible && <TicketModal />}
      {children}
    </ModalContext.Provider>
  );
};
