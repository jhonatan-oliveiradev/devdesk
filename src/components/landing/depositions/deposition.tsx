import { StarFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";

interface DepositionProps {
  avatar: string;
  name: string;
  title: string;
  text: string;
  emphasis?: boolean;
}

const Deposition = (props: DepositionProps) => {
  return (
    <div
      className={`flex h-[350px] w-[350px] flex-col items-center justify-center gap-3 rounded-xl bg-background p-7 shadow-xl ${props.emphasis && "xl:h-[380px]"}`}
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
};

export default Deposition;
