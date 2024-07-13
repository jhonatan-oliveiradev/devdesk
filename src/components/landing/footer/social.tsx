import React, { ReactNode } from "react";
import Link from "next/link";

interface SocialProps {
  url: string;
  icon: ReactNode;
}

const Social = (props: SocialProps) => {
  return (
    <Link href={props.url} target="_blank">
      <div className="group mr-2 cursor-pointer rounded-lg bg-muted p-2 transition-all hover:bg-primary hover:text-muted">
        {props.icon}
      </div>
    </Link>
  );
};

export default Social;
