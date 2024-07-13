import Image from "next/image";
import Link from "next/link";

interface BrandProps {
  image: string;
  alt: string;
}

const Brand = (props: BrandProps) => {
  return (
    <Link
      href="#"
      className="group flex items-center justify-center rounded-xl border shadow-lg"
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
