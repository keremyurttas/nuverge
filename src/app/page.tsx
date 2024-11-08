import Navbar from "@/components/global/navbar";
import { BackgroundBeams } from "@/components/background-beams";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { clients, plans, products } from "@/lib/constants";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { FlipWords } from "@/components/ui/flip-words";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Lamp } from "@/components/ui/lamp";
import { HoverEffect } from "@/components/ui/card-hover-effect";
export default function Home() {
  return (
    <>
      <main className="flex items-center justify-center flex-col">
        <Navbar />
        <BackgroundBeams className="h-screen"></BackgroundBeams>
        <MacbookScroll
          src={"https://i.ytimg.com/vi/jM4FSFGhXC4/maxresdefault.jpg"}
        />
        <div className="hidden md:block h-96"></div>
        <InfiniteMovingCards
          className="md:mt-[18rem] mt-[-100px] mb-8"
          items={clients}
          direction="right"
          speed="slow"
        />
        <HeroParallax products={products} />
        <Lamp />
      </main>
    </>
  );
}
