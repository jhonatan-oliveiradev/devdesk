"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
interface ResponsiveImageProps {
  image: any;
  className?: string;
  id?: string;
}

const ResponsiveImage = (props: ResponsiveImageProps) => {
  useLayoutEffect(() => {
    gsap.to("#responsive-img", {
      x: 0,
      rotate: "3deg",
      opacity: 1,
    });

    return () => {
      gsap.killTweensOf("#responsive-img");
    };
  }, []);

  return (
    <Image
      id="responsive-img"
      src={props.image}
      width={0}
      height={0}
      sizes="100vw"
      alt="Imagem"
      className={`h-[120px] w-[100%] rounded-xl object-cover sm:h-[330px] sm:w-[200px] md:h-[365px] md:w-[350px] lg:h-[365px] lg:w-[550px] ${props.className ?? ""} `}
    />
  );
};

export default ResponsiveImage;
