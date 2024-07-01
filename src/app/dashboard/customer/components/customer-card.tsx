import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Trash2Icon } from "lucide-react";

const CustomerCard = () => {
  return (
    <Card className="flex flex-col gap-2">
      <CardHeader className="mb-2 border-b">
        <h3 className="font-bold">Mercado Silva</h3>
      </CardHeader>
      <CardContent>
        <p>
          <span className="mr-2 font-bold">E-mail:</span>
          mercadosilva@gmail.com
        </p>
        <p>
          <span className="mr-2 font-bold">Telefone:</span>
          (11) 99999-9999
        </p>
      </CardContent>
      <CardFooter className="flex w-full items-center justify-end">
        <Button size="icon">
          <Trash2Icon size="16" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CustomerCard;
