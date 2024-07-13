import { Area } from "@/components/area";
import Slogan from "./slogan";
import ResponsiveImage from "@/components/responsive-image";

const Hero = () => {
  return (
    <Area id="#vantagens" className="py-20">
      <div className="relative flex h-[500px] items-center justify-around">
        <div className="absolute right-0 -z-10 hidden h-80 w-80 rounded-full bg-primary blur-3xl lg:block"></div>
        <Slogan />
        <ResponsiveImage
          image="/hero-image.jpg"
          className="hidden rotate-3 md:inline"
        />
      </div>
    </Area>
  );
};

export default Hero;
