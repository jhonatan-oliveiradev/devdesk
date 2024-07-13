import Advantage from "./advantage";

const Advantages = () => {
  return (
    <section
      id="#vantagens"
      className="flex-items-center mx-auto w-full flex-col justify-center"
    >
      <h2 className="text-center text-2xl font-black text-muted-foreground lg:mb-20 lg:text-4xl">
        Vantagens do{" "}
        <span>
          bit<span className="font-thin">DESK</span>
        </span>
      </h2>
      <Advantage
        image="/advantage-1.jpg"
        title="Centralização de Chamados"
        subtitle="Com o bitDESK, você pode centralizar todos os chamados em um único lugar, garantindo que nenhuma solicitação seja esquecida ou perdida. Acompanhe o status de cada ticket e mantenha sua equipe informada em tempo real."
      />
      <Advantage
        image="/advantage-2.jpg"
        title="Histórico de Clientes"
        subtitle="Tenha acesso ao histórico completo de interações com cada cliente. Com o bitDESK, você pode visualizar rapidamente informações passadas, notas e tickets anteriores, facilitando um atendimento mais personalizado e eficiente."
        invert
      />
      <Advantage
        image="/advantage-3.jpg"
        title="Automação de Processos"
        subtitle="Automatize tarefas repetitivas e ganhe tempo para focar no que realmente importa. Nossa plataforma permite configurar regras de automação que agilizam o fluxo de trabalho e aumentam a produtividade da sua equipe."
      />
      <Advantage
        image="/advantage-4.jpg"
        title="Relatórios e Análises"
        subtitle="Obtenha insights valiosos sobre o desempenho do atendimento ao cliente com relatórios detalhados e análises personalizáveis. Identifique áreas de melhoria e tome decisões informadas para elevar a qualidade do seu suporte."
        invert
      />
    </section>
  );
};

export default Advantages;
