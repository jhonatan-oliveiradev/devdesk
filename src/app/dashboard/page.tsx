import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

import Container from "@/components/container";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  const firstName = session.user.name?.split(" ")[0] ?? "";

  return (
    <Container>
      <div className="">
        <p>Bem-vindo, {firstName}!</p>

        <div className="flex w-full flex-col">
          <h2>Chamados</h2>
          <Button className="" size="icon" variant="ghost">
            <Link className="" href="/dashboard/">
              <PlusIcon size="16" />
              Abrir chamado
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
