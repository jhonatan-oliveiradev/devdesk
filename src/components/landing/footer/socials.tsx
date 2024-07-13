import { Linkedin, Youtube } from "lucide-react";
import Social from "./social";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";

const Socials = () => {
  return (
    <div className="flex">
      <Social
        url="#"
        icon={
          <Youtube className="size-5 text-primary transition-all group-hover:text-muted" />
        }
      />
      <Social
        url="#"
        icon={
          <GitHubLogoIcon className="size-5 text-primary transition-all group-hover:text-muted" />
        }
      />
      <Social
        url="#"
        icon={
          <InstagramLogoIcon className="size-5 text-primary transition-all group-hover:text-muted" />
        }
      />
      <Social
        url="#"
        icon={
          <Linkedin className="size-5 text-primary transition-all group-hover:text-muted" />
        }
      />
    </div>
  );
};

export default Socials;
