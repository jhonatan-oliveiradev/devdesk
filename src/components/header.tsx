"use client";

import { Loader2Icon, LockIcon, LogOut, User2Icon } from "lucide-react";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { status, data } = useSession();

  const handleLogin = async () => await signIn();
  const handleLogout = async () => await signOut();

  return (
    <header className="flex h-16 w-full items-center border-b px-2 shadow-sm">
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
          <Button variant="ghost" size="icon" onClick={handleLogin}>
            <LockIcon size="16" />
          </Button>
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
