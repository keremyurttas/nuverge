import Navbar from "@/components/global/navbar";
import { BackgroundBeams } from "@/components/background-beams";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { clients, plans, products } from "@/lib/constants";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { FlipWords } from "@/components/ui/flip-words";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Lamp } from "@/components/ui/lamp";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <main className="flex items-center justify-center flex-col overflow-hidden">
        <Navbar />
        <BackgroundBeams className="h-screen"></BackgroundBeams>
        <ContainerScroll
          titleComponent={
            <div className="flex items-center flex-col">
              <Button
                size={"lg"}
                className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                  Start For Free Today
                </span>
              </Button>
              <h1 className="text-5xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                Automate your work{" "}
                <FlipWords words={["rapidly", "simply", "efficiently"]} />{" "}
                <br /> NuVerse
              </h1>
            </div>
          }
        >
          
        </ContainerScroll>
        <InfiniteMovingCards
          className=" mt-[-100px] md:mt-0 mb-8 "
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
