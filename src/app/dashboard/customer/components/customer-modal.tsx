import { CustomerModel } from "@/utils/customer.type";

import CustomerForm from "./customer-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const CustomerFormModal = ({
  customer,
  onClose,
  onSubmit,
}: {
  customer: CustomerModel;
  onClose: () => void;
  onSubmit: (data: any) => void;
}) => {
  const handleSubmit = async (data: any) => {
    await onSubmit({
      ...data,
      id: customer.id,
      userId: customer.userId,
    });
    onClose();
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Editar Cliente</DialogTitle>
          <DialogDescription>
            Atualize as informações do cliente abaixo.
          </DialogDescription>
        </DialogHeader>
        <CustomerForm customer={customer} onSubmit={handleSubmit} />
        {/* <DialogFooter className="relative sm:justify-end">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              className="absolute -top-[52px]"
            >
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default CustomerFormModal;
