import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

import Link from "next/link";
import Container from "@/components/container";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import CustomerForm from "../components/customer-form";

export default async function NewCustomerPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <Container>
      <section className="my-2 flex flex-col">
        <div className="mb-8 flex items-center gap-2">
          <Button asChild>
            <Link href="/dashboard/customer">
              <ChevronLeft size="16" />
              Voltar
            </Link>
          </Button>
        </div>
        <h2 className="mb-8 text-2xl font-bold">Novo cliente</h2>
        <CustomerForm userId={session.user.id} />
      </section>
    </Container>
  );
}
