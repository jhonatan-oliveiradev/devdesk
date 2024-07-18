import Link from "next/link";
import { Area } from "@/components/area";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

export default function NotFound() {
  return (
    <Area className="bg-hero bg-center bg-no-repeat">
      <div className="flex h-[calc(100vh-64px)] flex-col items-center justify-center space-y-8">
        <div className="">
          <h2 className="pointer-events-none text-9xl font-black text-primary">
            404
          </h2>
          <span className="text-muted-foreground">
            Ops, está página ainda não existe...
          </span>
        </div>
        <Button
          asChild
          className="group flex items-center justify-center gap-2"
        >
          <Link href="/">
            <ArrowLeftIcon className="size-4 transition-all group-hover:-translate-x-1" />
            Voltar para a home
          </Link>
        </Button>
      </div>
    </Area>
  );
}
