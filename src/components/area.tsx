import { cn } from "@/lib/utils";
import { ReactNode, forwardRef } from "react";

interface AreaProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Area = forwardRef<HTMLDivElement, AreaProps>((props, ref) => {
  return (
    <section
      id={props.id}
      className={cn("flex w-full justify-center", props.className)}
    >
      <div className="w-full px-7 xl:w-[1200px] xl:px-0">{props.children}</div>
    </section>
  );
});

Area.displayName = "Area";
