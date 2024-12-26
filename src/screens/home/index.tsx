import AOS from "aos";
import "aos/dist/aos.css";

import { Steps } from "./steps";
import Pricing from "./pricing";
import { Faq } from "./faq";

export const Home = () => {
  AOS.init();

  return (
    <main className="w-full h-full bg-white">
      <section
        id="hero"
        className="relative w-full max-h-full flex flex-col justify-center items-center px-4 pt-20 pb-32 gap-20 bg-gradient-ilovefy"
      >
        <div className="flex flex-col gap-4">
          <h1 className="w-full text-neutral-300 font-semibold text-5xl">
            Eternize o <br />{" "}
            <span className="uppercase font-black text-6xl text-white">
              seu amor
            </span>
          </h1>
          <p className="text-md text-neutral-300">
            Crie uma página personalizada para celebrar seu relacionamento com{" "}
            <strong className="text-white">fotos</strong>,{" "}
            <strong className="text-white">músicas</strong>,{" "}
            <strong className="text-white">mensagens</strong> e{" "}
            <strong className="text-white">muito mais</strong>
          </p>
          <a
            href="#pricing"
            className="text-center w-[100%] mt-6 py-3 px-6 text-rosa-ilovefy font-bold capitalize bg-white rounded-xl text-lg shadow-intense-dark-rosa"
          >
            Montar iLovefy
          </a>
        </div>
        <img src="hero-mockup-04.png" alt="" className="w-full scale-[1.2]" />
        <img
          src="blob-shape.png"
          alt=""
          className="absolute -bottom-[18em] -left-[0%] scale-[1.2]"
        />
        <div>
          <img
            src="white-heart.png"
            alt=""
            className="absolute size-24 opacity-80 -rotate-24 -top-2 right-5"
          />
          <img
            src="white-heart.png"
            alt=""
            className="absolute size-16 opacity-70 -rotate-20 top-[4.5em] right-1"
          />
        </div>
      </section>
      <section
        id="how-it-works"
        className="relative overflow-hidden w-full h-full flex justify-center flex-col pt-14 pb-32 px-4 bg-gradient-neutral"
      >
        <Steps />
      </section>
      <section
        id="pricing"
        className="w-full h-full flex justify-center flex-col py-14 px-4 bg-white"
      >
        <Pricing />
      </section>
      <section className="relative overflow-hidden w-full h-full flex justify-center flex-col pt-14 pb-32 px-4 bg-gradient-neutral">
        <Faq />
      </section>
    </main>
  );
};
