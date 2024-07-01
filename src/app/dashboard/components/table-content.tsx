import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileIcon, Trash2Icon } from "lucide-react";

const TableContent = () => {
  return (
    <Table className="min-w-full">
      <TableCaption className="text-xs italic text-muted-foreground">
        Lista de chamados.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Cliente</TableHead>
          <TableHead>Data Cadastro</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">#</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Mercado Silva</TableCell>
          <TableCell>01/07/2024</TableCell>
          <TableCell>
            <Badge variant="success">Aberto</Badge>
          </TableCell>
          <TableCell className="flex items-center justify-end gap-2 text-right">
            <Button
              size="icon"
              variant="ghost"
              className="bg-blue-600 text-white hover:bg-blue-600/80 hover:text-white"
            >
              <FileIcon size="16" />
            </Button>
            <Button size="icon">
              <Trash2Icon size="16" />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableContent;
