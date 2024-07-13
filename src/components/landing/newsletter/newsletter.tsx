import { Area } from "@/components/area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  return (
    <Area className="bg-hero bg-center bg-no-repeat py-40">
      <div className="mb-20 space-y-2 text-center">
        <h2 className="text-2xl text-muted-foreground md:text-4xl">
          Fique Atualizado com as Novidades da{" "}
          <span className="font-black">bit</span>DESK
        </h2>
        <p className="text-sm font-thin">
          Inscreva-se para receber atualizações exclusivas, dicas de
          produtividade e as últimas notícias diretamente no seu e-mail.
        </p>
      </div>
      <div className="flex flex-col items-center justify-between gap-20 md:flex-row">
        <div className="flex flex-col items-center gap-10">
          <p>
            Acompanhe de perto todas as inovações e melhorias que estamos
            trazendo para a <span className="font-black">bit</span>DESK. Ao se
            inscrever na nossa newsletter, você terá acesso a:
          </p>
          <ul className="flex flex-col items-start justify-center">
            <li className="flex items-start gap-1">
              <ArrowRight className="mt-1 size-4 text-primary" />
              <span>
                <span className="font-bold">
                  Lançamentos de Funcionalidades:{" "}
                </span>
                Fique por dentro das novas funcionalidades que facilitarão ainda
                mais o gerenciamento de seus clientes e chamados.
              </span>
            </li>
            <li className="flex items-start gap-1">
              <ArrowRight className="mt-1 size-4 text-primary" />
              <span>
                <span className="font-bold">Dicas de Uso: </span>
                Fique por dentro das novas funcionalidades que facilitarão ainda
                mais o gerenciamento de seus clientes e chamados.
              </span>
            </li>
            <li className="flex items-start gap-1">
              <ArrowRight className="mt-1 size-4 text-primary" />
              <span>
                <span className="font-bold">Histórias de Sucesso: </span>
                Fique por dentro das novas funcionalidades que facilitarão ainda
                mais o gerenciamento de seus clientes e chamados.
              </span>
            </li>
            <li className="flex items-start gap-1">
              <ArrowRight className="mt-1 size-4 text-primary" />
              <span>
                <span className="font-bold">Ofertas Exclusivas: </span>
                Fique por dentro das novas funcionalidades que facilitarão ainda
                mais o gerenciamento de seus clientes e chamados.
              </span>
            </li>
          </ul>
          <strong className="self-start">
            Não Perca Nada! Inscreva-se Agora!
          </strong>
        </div>

        <div className="flex flex-grow items-center justify-center">
          <form className="w-full space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xl font-bold">
                Nome:
              </Label>
              <Input
                className="w-full"
                name="name"
                type="text"
                placeholder="Digite seu nome completo"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xl font-bold">
                E-mail:
              </Label>
              <Input
                className="w-full"
                name="email"
                type="email"
                placeholder="Digite seu melhor e-mail"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Button className="w-full">Quero Receber as Novidades</Button>
              <span className="text-sm text-muted-foreground">
                Prometemos não enviar spam. Você pode cancelar a inscrição a
                qualquer momento.
              </span>
            </div>
          </form>
        </div>
      </div>
    </Area>
  );
};

export default Newsletter;
