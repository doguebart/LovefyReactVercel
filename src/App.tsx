import { Steps } from "./components/steps";

export const App = () => {
  return (
    <main className="w-full h-full bg-white">
      <section id="hero" className="w-full max-h-full flex flex-col py-10 px-4">
        <div className="md:w-[600px] md:m-auto">
          <div className="flex flex-col gap-6">
            <h1 className="md:text-7xl leading-[0.8em] text-[50px] text-rosa-lovefy font-black">
              Surpreenda o seu amor{" "}
              <span className="md:text-5xl text-3xl">💘</span>
            </h1>
            <p className="text-neutral-500 font-normal leading-[1.2em] md:text-lg text-sm ">
              Crie um contador dinâmico de tempo de relacionamento. Preencha o
              formulário e receba o seu site personalizado + QR Code
            </p>
          </div>
        </div>
      </section>
      <section
        id="content"
        className="w-full max-h-full flex flex-col py-10 px-4 bg-neutral-50"
      >
        <div className="md:w-[600px] md:m-auto">
          <Steps />
        </div>
      </section>
    </main>
  );
};
