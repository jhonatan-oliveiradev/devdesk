"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";
import { CustomerModel } from "@/utils/customer.type";

type CustomerContextType = {
  customers: CustomerModel[];
  addCustomer: (customer: CustomerModel) => void;
  fetchCustomers: () => void;
};

const CustomerContext = createContext<CustomerContextType | undefined>(
  undefined,
);

export const CustomerProvider = ({ children }: { children: ReactNode }) => {
  const [customers, setCustomers] = useState<CustomerModel[]>([]);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get("/api/customers");
      setCustomers(response.data);
    } catch (error) {
      console.error("Failed to fetch customers", error);
    }
  };

  const addCustomer = (newCustomer: CustomerModel) => {
    setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <CustomerContext.Provider
      value={{ customers, addCustomer, fetchCustomers }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerContext = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error(
      "useCustomerContext must be used within a CustomerProvider",
    );
  }
  return context;
};
