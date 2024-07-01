import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

import Link from "next/link";
import Container from "@/components/container";
import CustomerCard from "./components/customer-card";

import { Button } from "@/components/ui/button";

import { PlusIcon } from "lucide-react";

export default async function CustomerPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <Container>
      <section className="mb-2 mt-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Meus clientes</h2>
          <Button className="flex w-fit px-4" size="icon" asChild>
            <Link
              href="/dashboard/customer/new"
              className="flex items-center gap-2"
            >
              <PlusIcon size="16" />
              Novo cliente
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <CustomerCard />
          <CustomerCard />
          <CustomerCard />
        </div>
      </section>
    </Container>
  );
}
