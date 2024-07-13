import { Area } from "@/components/area";
import Deposition from "./deposition";

const Depositions = () => {
  return (
    <Area
      id="#depoimentos"
      className="w-full bg-gradient-to-b from-background via-secondary to-background py-10 sm:py-20"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-10 text-center text-2xl font-thin text-muted-foreground sm:text-4xl">
          O que nossos clientes dizem...
        </h2>
        <div className="flex w-full flex-wrap items-center justify-center justify-items-center gap-6 xl:justify-between">
          <Deposition
            avatar="/depo-1.jpg"
            name="Maria Silva"
            title="Gerente de Suporte"
            text='"Desde que começamos a usar o bitDESK, nossa eficiência no atendimento ao cliente aumentou significativamente. A interface é intuitiva e a equipe de suporte é sempre prestativa."'
          />
          <Deposition
            avatar="/depo-2.jpg"
            name="João Pereira"
            title="Diretor de Atendimento"
            text='"A capacidade de visualizar o histórico completo dos nossos clientes nos permite oferecer um atendimento muito mais personalizado. bitDESK se tornou uma ferramenta indispensável para nossa equipe."'
            emphasis
          />
          <Deposition
            avatar="/depo-3.jpg"
            name="Ana Costa"
            title="Coordenadora de Suporte"
            text='"Automatizar processos com o bitDESK nos ajudou a reduzir o tempo de resposta e aumentar a satisfação dos nossos clientes. Recomendo a todos que buscam melhorar o suporte ao cliente."'
          />
        </div>
      </div>
    </Area>
  );
};

export default Depositions;
