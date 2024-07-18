"use client";

import { signIn, useSession } from "next-auth/react";

import { useLayoutEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

import { Button } from "@/components/ui/button";

import { ArrowRight, Ticket } from "lucide-react";

const Slogan = () => {
  const { status } = useSession();

  const handleLogin = async () => await signIn();

  useLayoutEffect(() => {
    gsap.to("#slogan", {
      x: 0,
      opacity: 1,
    });

    gsap.to("#tagline", {
      x: 0,
      opacity: 1,
    });

    return () => {
      gsap.killTweensOf("#slogan", "#tagline");
    };
  }, []);

  function renderPhrase() {
    return (
      <div
        id="slogan"
        className="flex -translate-x-20 flex-col items-center text-4xl font-light opacity-0 md:items-start lg:text-6xl"
      >
        <div className="flex gap-2.5">
          <div className="relative">
            <span className="absolute bottom-1 left-0 w-full -rotate-2 border-b-8 border-primary" />
            <span className="relative">Transforme</span>
          </div>
        </div>
        <div>o atendimento</div>
        <div className="flex gap-2.5">
          <span>ao</span>
          <span>cliente</span>
        </div>
        <div className="flex gap-2.5">
          <span>com</span>
          <span className="relative flex items-center p-1">
            <div className="rounded-xs absolute left-0 top-0.5 h-5/6 w-full -rotate-1 bg-gradient-to-t from-primary/80 to-background shadow-lg"></div>
            <span className="relative z-20 rotate-2">
              <span className="font-bold">bit</span>
              DESK
            </span>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      id="tagline"
      className="flex -translate-x-20 flex-col justify-center gap-5 opacity-0"
    >
      {renderPhrase()}
      <div className="text-center text-sm font-thin sm:text-left lg:text-lg">
        <h2 className="mb-4 text-muted-foreground">
          A plataforma definitiva de gerenciamento de clientes e chamados.
        </h2>
      </div>
      <div className="flex items-center justify-center gap-4 lg:justify-start">
        {status === "authenticated" ? (
          <Button asChild className="group">
            <Link
              href="/dashboard"
              className="flex items-center gap-1 font-semibold"
            >
              Dashboard
              <ArrowRight className="size-4 transition-all group-hover:translate-x-1" />
            </Link>
          </Button>
        ) : (
          <Button
            onClick={handleLogin}
            className="group flex items-center justify-center gap-2"
          >
            Inicie grátis
            <ArrowRight className="size-4 transition-all group-hover:translate-x-1" />
          </Button>
        )}
        <Button asChild variant="secondary" className="flex items-center gap-2">
          <Link href="/open">
            <Ticket className="size-4" />
            Abra um chamado
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Slogan;
