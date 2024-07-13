import { Area } from "@/components/area";
import Plan from "./plan";

const Pricing = () => {
  return (
    <Area className="bg-gradient-to-b from-background via-primary/40 to-background py-20">
      <div className="mb-20 space-y-2 text-center">
        <h2 className="text-2xl text-muted-foreground md:text-4xl">
          Planos de Assinatura
        </h2>
        <p className="font-thin">Escolha o Plano Ideal para Sua Empresa</p>
      </div>
      <div className="flex w-full flex-col items-center gap-10 md:flex-row">
        <Plan
          title="Plan Basic"
          price="49/mês"
          features={[
            { feature: "Gestão de até 100 chamados por mês" },
            { feature: "Histórico de clientes" },
            { feature: "Relatórios básicos" },
            { feature: "Suporte via e-mail" },
            { feature: "Acesso para até 3 usuários" },
          ]}
          cta="Assine Agora"
        />
        <Plan
          title="Plan Pro"
          price="99/mês"
          features={[
            { feature: "Gestão de até 500 chamados por mês" },
            { feature: "Histórico de clientes avançado" },
            { feature: "Suporte via e-mail e chat" },
            { feature: "Acesso para até 10 usuários" },
            { feature: "Automação de processos" },
          ]}
          cta="Experimente Gratuitamente"
          recommended
          emphasis
        />
        <Plan
          title="Plan Enterprise"
          price="Entre em contato"
          features={[
            { feature: "Gestão de chamados ilimitada" },
            { feature: "Histórico de clientes completo" },
            { feature: "Relatórios personalizados e análises avançadas" },
            { feature: "Suporte prioritário via e-mail, chat e telefone" },
            { feature: "Acesso ilimitado de usuários" },
            { feature: "Automação de processos avançada" },
            { feature: "Consultoria personalizada" },
          ]}
          cta="Fale com um Especialista"
        />
      </div>
    </Area>
  );
};

export default Pricing;
