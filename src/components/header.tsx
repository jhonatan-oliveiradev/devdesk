"use client";

import Logo from "./logo";
import Link from "next/link";

import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Separator } from "./ui/separator";
import { signIn, signOut, useSession } from "next-auth/react";

import { Loader2Icon, LogInIcon, LogOut, User2Icon } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [top, setTop] = useState(true);
  const { status } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [top]);

  const handleLogin = async () => await signIn();
  const handleLogout = async () => await signOut();

  return (
    <header
      className={`z-10 flex h-16 w-full items-center border-b px-2 shadow-sm ${!top && "[&:-webkit-backdrop-filter: blur(12px)] fixed backdrop-blur-md"}`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Logo />

        {status === "loading" && (
          <Button
            variant="ghost"
            size="icon"
            className="animate-spin hover:bg-transparent"
          >
            <Loader2Icon size="16" />
          </Button>
        )}

        {status === "unauthenticated" && (
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center justify-center gap-2">
              <nav className="mr-10 hidden md:flex">
                <ul className="flex items-center justify-center gap-10">
                  <li className="transition-all hover:text-muted-foreground">
                    <Link href="/">Início</Link>
                  </li>
                  <li className="transition-all hover:text-muted-foreground">
                    <Link href="#vantagens">Vantagens</Link>
                  </li>
                  <li className="transition-all hover:text-muted-foreground">
                    {" "}
                    <Link href="#depoimentos">Depoimentos</Link>
                  </li>
                </ul>
              </nav>
              <Button
                onClick={handleLogin}
                className="flex items-center justify-center gap-2"
              >
                <LogInIcon className="size-5" />
                Login
              </Button>
            </div>
            <Separator orientation="vertical" className="h-8" />
            <div>
              <ModeToggle />
            </div>
          </div>
        )}

        {status === "authenticated" && (
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center justify-center gap-2">
              <Button variant="ghost" size="icon">
                <Link href="/dashboard">
                  <User2Icon size="16" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
                className="hover:text-primary"
              >
                <LogOut size="16" />
              </Button>
            </div>
            <Separator orientation="vertical" className="h-8" />
            <div>
              <ModeToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
