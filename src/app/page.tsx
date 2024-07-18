import Hero from "@/components/landing/hero/hero";
import Advantages from "@/components/landing/advantages/advantages";
import Depositions from "@/components/landing/depositions/depositions";
import Brands from "@/components/landing/brands/brands";
import Pricing from "@/components/landing/pricing/pricing";
import Newsletter from "@/components/landing/newsletter/newsletter";
import Footer from "@/components/landing/footer/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">
      <Hero />
      <Brands />
      <Advantages />
      <Depositions />
      <Pricing />
      <Newsletter />
      <Footer />
    </div>
  );
}
