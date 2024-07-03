"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { api } from "@/lib/api";

import { CustomerModel } from "@/utils/customer.type";
import { formatPhoneNumber } from "@/utils/format-phone";

import { Edit2Icon, Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CustomerFormModal from "./customer-modal";

const CustomerCard = ({ customer }: { customer: CustomerModel }) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteCustomer = async () => {
    try {
      const response = await api.delete("/api/customer", {
        params: {
          id: customer.id,
        },
      });

      router.refresh();
    } catch (err) {
      console.error(err, "Failed to delete customer");
    }
  };

  const handleUpdateCustomer = async (data: CustomerModel) => {
    try {
      const response = await api.put("/api/customer", {
        ...data,
        id: customer.id,
      });

      router.refresh();
      setIsEditing(false);
    } catch (err) {
      console.error(err, "Failed to update customer");
    }
  };

  return (
    <>
      <Card className="flex flex-col gap-2">
        <CardHeader className="flex w-full flex-row items-center justify-between border-b">
          <h3 className="font-bold">{customer.name}</h3>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsEditing(true)}
          >
            <Edit2Icon size="16" className="text-primary" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <p className="text-sm">
              <span className="mr-2 font-bold text-primary">E-mail:</span>
              {customer.email}
            </p>
            <p className="text-sm">
              <span className="mr-2 font-bold text-primary">Telefone:</span>
              {formatPhoneNumber(customer.phone)}
            </p>
            {customer.address && (
              <p className="text-sm">
                <span className="mr-2 font-bold text-primary">Endereço:</span>
                {customer.address}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex h-full w-full items-end justify-end">
          <Button size="icon" onClick={handleDeleteCustomer}>
            <Trash2Icon size="16" />
          </Button>
        </CardFooter>
      </Card>

      {isEditing && (
        <CustomerFormModal
          customer={customer}
          onClose={() => setIsEditing(false)}
          onSubmit={handleUpdateCustomer}
        />
      )}
    </>
  );
};

export default CustomerCard;
