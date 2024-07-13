import { Area } from "../../area";
import Logo from "../../logo";
import Socials from "./socials";

const Footer = () => {
  return (
    <Area className="py-20">
      <div className="flex flex-col items-center md:items-start">
        <Logo />
        <div className="mt-2 text-center text-muted-foreground md:text-left">
          <div>Plataforma de gerenciamento</div>
          <div className="flex gap-1.5">
            que
            <span className="bg-gradient-to-r from-violet-600 to-primary bg-clip-text font-black text-transparent">
              simplifica{" "}
            </span>
            sua vida
          </div>
        </div>
      </div>
      <div className="mt-14 flex flex-col items-center md:flex-row md:justify-between">
        <Socials />
        <p className="mt-8 text-center md:mt-0">
          <span className="font-black">
            Jhonatan Oliveira
            <span className="font-black text-primary">.</span>
          </span>{" "}
          ® {new Date().getFullYear()} - Todos os direitos reservados.
        </p>
      </div>
    </Area>
  );
};

export default Footer;
