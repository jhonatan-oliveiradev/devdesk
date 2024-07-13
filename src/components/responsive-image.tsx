import Image from "next/image";

interface ResponsiveImageProps {
  image: any;
  className?: string;
}

const ResponsiveImage = (props: ResponsiveImageProps) => {
  return (
    <Image
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
