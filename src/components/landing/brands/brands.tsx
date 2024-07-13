import { Area } from "@/components/area";
import Brand from "./brand";

const logos = [
  { image: "/logos/2twitce-logo.png", alt: "Brand 1" },
  { image: "/logos/acme-logo.png", alt: "Brand 2" },
  { image: "/logos/apex-logo.png", alt: "Brand 3" },
  { image: "/logos/celestial-logo.png", alt: "Brand 4" },
  { image: "/logos/echo-valley-logo.png", alt: "Brand 5" },
  { image: "/logos/outside-logo.png", alt: "Brand 6" },
  { image: "/logos/pulse-logo.png", alt: "Brand 7" },
  { image: "/logos/quantum-logo.png", alt: "Brand 8" },
];

const Brands = () => {
  return (
    <Area className="w-full bg-gradient-to-b from-background via-primary/80 to-background py-28">
      <h2 className="mb-10 text-center text-2xl text-muted-foreground lg:text-4xl">
        Utilizado pelas equipes mais inovadoras do mundo
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {logos.map((logo) => (
          <Brand key={logo.alt} image={logo.image} alt={logo.alt} />
        ))}
      </div>
    </Area>
  );
};

export default Brands;
