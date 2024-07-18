"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import Link from "next/link";

interface BrandProps {
  image: string;
  alt: string;
}

const Brand = (props: BrandProps) => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#brand", {
      x: 0,
      rotate: "0deg",
      opacity: 1,
      scrollTrigger: {
        trigger: "#brand",
        markers: false,
        start: "top 400px",
        end: "bottom 500px",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf("#brand");
    };
  }, []);

  return (
    <Link
      id="brand"
      href="#"
      className="group flex translate-x-48 rotate-45 items-center justify-center rounded-xl border opacity-0 shadow-lg"
    >
      <Image
        src={props.image}
        alt={props.alt}
        width={155}
        height={34}
        className="py-8 transition-all group-hover:scale-x-105"
      />
    </Link>
  );
};

export default Brand;
