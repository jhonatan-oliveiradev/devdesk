"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Area } from "@/components/area";
import Deposition from "./deposition";

gsap.registerPlugin(ScrollTrigger);

const Depositions = () => {
  const depoItem1Ref = useRef(null);
  const depoItem2Ref = useRef(null);
  const depoItem3Ref = useRef(null);
  const sectionRef = useRef(null);

  const section = sectionRef.current;

  useLayoutEffect(() => {
    const depoItem1 = depoItem1Ref.current;
    const depoItem2 = depoItem2Ref.current;
    const depoItem3 = depoItem3Ref.current;

    gsap.fromTo(
      depoItem1,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power5.out",
      },
    );

    gsap.fromTo(
      depoItem2,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "65% center",
        },
      },
    );

    gsap.fromTo(
      depoItem3,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "65% center",
        },
      },
    );

    function animateCards(images: null[], position: number) {
      gsap.fromTo(
        images,
        {
          opacity: 0,
          x: position,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: "center center",
          },
        },
      );
    }

    const centralCard = [depoItem1];
    const leftCard = [depoItem2];
    const rightCard = [depoItem3];

    animateCards(centralCard, 0);
    animateCards(leftCard, -50);
    animateCards(rightCard, 50);
  }, [section]);

  return (
    <Area
      id="depoimentos"
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-background via-secondary to-background py-10 sm:py-20"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-10 text-center text-2xl font-thin text-muted-foreground sm:text-4xl">
          O que nossos clientes dizem...
        </h2>
        <div className="flex w-full flex-wrap items-center justify-center justify-items-center gap-6 xl:justify-between">
          <Deposition
            ref={depoItem2Ref}
            className="left-44 top-8 opacity-0"
            avatar="/depo-1.jpg"
            name="Maria Silva"
            title="Gerente de Suporte"
            text='"Desde que começamos a usar o bitDESK, nossa eficiência no atendimento ao cliente aumentou significativamente. A interface é intuitiva e a equipe de suporte é sempre prestativa."'
          />
          <Deposition
            ref={depoItem1Ref}
            className="-bottom-24 opacity-0"
            avatar="/depo-2.jpg"
            name="João Pereira"
            title="Diretor de Atendimento"
            text='"A capacidade de visualizar o histórico completo dos nossos clientes nos permite oferecer um atendimento muito mais personalizado. bitDESK se tornou uma ferramenta indispensável para nossa equipe."'
            emphasis
          />
          <Deposition
            ref={depoItem3Ref}
            className="right-44 top-8 opacity-0"
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
