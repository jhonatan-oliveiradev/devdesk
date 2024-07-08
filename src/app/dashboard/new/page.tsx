import Container from "@/components/container";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { ChevronLeft } from "lucide-react";

export default function NewTicketPage() {
  return (
    <Container>
      <div className="flex items-center gap-2">
        <Button asChild>
          <Link href="/dashboard">
            <ChevronLeft size="16" />
            Voltar
          </Link>
        </Button>
      </div>
    </Container>
  );
}
