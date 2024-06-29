import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn(className, "mx-auto w-full max-w-7xl px-2")}>
      {children}
    </div>
  );
};

export default Container;
