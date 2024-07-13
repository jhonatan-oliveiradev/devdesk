import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <section id={id} className={cn(className, "mx-auto w-full max-w-7xl px-2")}>
      {children}
    </section>
  );
};

export default Container;
