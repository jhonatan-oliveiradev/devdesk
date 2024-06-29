import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center justify-center gap-2 text-xl font-bold"
    >
      <span className="block text-primary md:hidden">!DDesk</span>
      <span className="hidden text-primary md:block">!Dev</span>
      <span className="hidden md:block">Desk</span>
    </Link>
  );
};

export default Logo;
