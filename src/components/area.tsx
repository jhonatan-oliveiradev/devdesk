import { ReactNode } from "react";

interface AreaProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Area = (props: AreaProps) => {
  return (
    <div className={`flex w-full justify-center ${props.className ?? ""}`}>
      <div className="w-full px-7 xl:w-[1200px] xl:px-0">{props.children}</div>
    </div>
  );
};
