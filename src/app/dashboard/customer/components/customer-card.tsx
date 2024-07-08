"use client";

import { api } from "@/lib/api";
import { formatPhoneNumber } from "@/utils/format-phone";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { CustomerModel } from "@/utils/customer.type";

import CustomerFormModal from "./customer-modal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  AlertOctagon,
  Check,
  Edit2Icon,
  FileWarningIcon,
  Trash2Icon,
  X,
} from "lucide-react";

const CustomerCard = ({ customer }: { customer: CustomerModel }) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteCustomer = async () => {
    try {
      await api.delete("/api/customer", {
        params: {
          id: customer.id,
        },
      });

      router.refresh();
    } catch (err) {
      console.error(err, "Failed to delete customer");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleUpdateCustomer = async (data: CustomerModel) => {
    try {
      await api.put("/api/customer", {
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
          <Button size="icon" onClick={() => setIsDeleting(true)}>
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

      <Dialog open={isDeleting} onOpenChange={setIsDeleting}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex gap-2">
              <AlertOctagon className="h-4 w-4 text-primary" />
              Confirmar Exclusão
            </DialogTitle>
            <DialogDescription>
              Tem certeza que deseja excluir o cliente: {customer.name}?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-end gap-2">
            <DialogClose asChild>
              <Button variant="outline">
                <X size="14" />
              </Button>
            </DialogClose>
            <Button onClick={handleDeleteCustomer}>
              <Check size="14" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CustomerCard;
