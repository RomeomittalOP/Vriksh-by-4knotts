import { HeroShop } from "@/components/home/HeroShop";
import { GoodnessProducts } from "@/components/home/GoodnessProducts";
import { WhyChoose } from "@/components/home/WhyChoose";
import { AboutBlock } from "@/components/home/AboutBlock";

export default function Home() {
  return (
    <>
      <HeroShop />
      <GoodnessProducts />
      <WhyChoose />
      <AboutBlock />
    </>
  );
}
