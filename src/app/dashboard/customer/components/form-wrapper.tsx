"use client";

import { useState } from "react";
import { CustomerModel } from "@/utils/customer.type";
import CustomerForm from "./customer-form";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

const FormWrapper = ({ userId }: { userId: string }) => {
  const router = useRouter();
  const [customer, setCustomer] = useState<CustomerModel>({
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    userId,
    createdAt: null,
    updatedAt: null,
  });

  const handleSubmit = async (data: any) => {
    try {
      if (customer.id) {
        // Update existing customer
        await api.put("/api/customer", {
          ...data,
          id: customer.id,
          userId: customer.userId,
        });
      } else {
        // Create new customer
        await api.post("/api/customer", {
          ...data,
          userId: customer.userId,
        });
      }

      router.replace("/dashboard/customer");
      router.refresh();
    } catch (error) {
      console.error("Failed to save customer", error);
    }
  };

  return <CustomerForm customer={customer} onSubmit={handleSubmit} />;
};

export default FormWrapper;
