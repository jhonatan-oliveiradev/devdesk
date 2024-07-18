// import { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Area } from "@/components/area";
import Plan from "./plan";

//gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  // const pricingItem1Ref = useRef(null);
  // const pricingItem2Ref = useRef(null);
  // const pricingItem3Ref = useRef(null);
  // const sectionRef = useRef(null);

  // const section = sectionRef.current;

  // useLayoutEffect(() => {
  //   const pricingItem1 = pricingItem1Ref.current;
  //   const pricingItem2 = pricingItem2Ref.current;
  //   const pricingItem3 = pricingItem3Ref.current;

  //   gsap.fromTo(
  //     pricingItem1,
  //     {
  //       opacity: 0,
  //       scale: 0.5,
  //     },
  //     {
  //       opacity: 1,
  //       scale: 1,
  //       duration: 1,
  //       ease: "power5.out",
  //     },
  //   );

  //   gsap.fromTo(
  //     pricingItem2,
  //     {
  //       opacity: 0,
  //       y: 100,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: section,
  //         start: "65% center",
  //       },
  //     },
  //   );

  //   gsap.fromTo(
  //     pricingItem3,
  //     {
  //       opacity: 0,
  //       y: 100,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: section,
  //         start: "65% center",
  //       },
  //     },
  //   );

  //   function animateCards(images: null[], position: number) {
  //     gsap.fromTo(
  //       images,
  //       {
  //         opacity: 0,
  //         x: position,
  //       },
  //       {
  //         opacity: 1,
  //         x: 0,
  //         duration: 0.5,
  //         stagger: 0.1,
  //         scrollTrigger: {
  //           trigger: section,
  //           start: "center center",
  //         },
  //       },
  //     );
  //   }

  //   const centralCard = [pricingItem1];
  //   const leftCard = [pricingItem2];
  //   const rightCard = [pricingItem3];

  //   animateCards(centralCard, 0);
  //   animateCards(leftCard, -50);
  //   animateCards(rightCard, 50);
  // }, [section]);

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
