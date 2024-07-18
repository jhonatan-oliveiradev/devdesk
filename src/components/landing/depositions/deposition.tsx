import { forwardRef } from "react";
import { StarFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface DepositionProps {
  avatar: string;
  name: string;
  title: string;
  text: string;
  emphasis?: boolean;
  className?: string;
}

const Deposition = forwardRef<HTMLDivElement, DepositionProps>((props, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        `flex h-[350px] w-[350px] flex-col items-center justify-center gap-3 rounded-xl bg-background p-7 shadow-xl ${props.emphasis && "xl:h-[380px]"}`,
        props.className,
      )}
    >
      <Image
        src={props.avatar}
        alt="avatar"
        width={80}
        height={80}
        className={`max-h-[80px] max-w-[80px] rounded-b-xl rounded-tl-xl object-cover shadow-lg`}
      />
      <div className="flex flex-col items-center">
        <span className="text-xl font-black">{props.name}</span>
        <span className="text-sm font-thin text-muted-foreground">
          {props.title}
        </span>
      </div>
      <p className="text-center italic">{props.text}</p>
      <div className="flex items-center justify-center gap-1">
        <StarFilledIcon className="size-4 text-primary" />
        <StarFilledIcon className="size-4 text-primary" />
        <StarFilledIcon className="size-4 text-primary" />
        <StarFilledIcon className="size-4 text-primary" />
        <StarFilledIcon className="size-4 text-primary" />
      </div>
    </div>
  );
});

Deposition.displayName = "Deposition";

export default Deposition;
