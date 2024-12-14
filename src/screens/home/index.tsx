import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, XCircle } from "lucide-react";

export const Home = () => {
  AOS.init();

  const navigate = useNavigate();

  const redirectCompleto = () => {
    navigate("/plano/completo");
  };

  const redirectSimples = () => {
    navigate("/plano/simples");
  };

  return (
    <main className="w-full h-full bg-white">
      <section
        id="hero"
        className="relative w-full max-h-full flex flex-col justify-center items-center px-4 py-20 gap-20"
      >
        <div className="flex flex-col gap-4">
          <h1 className="w-full text-neutral-600 font-semibold text-5xl">
            Eternize o <br />{" "}
            <span className="uppercase font-black text-6xl text-rosa-lovefy">
              seu amor
            </span>
          </h1>
          <p className="text-md text-neutral-600">
            Crie uma página personalizada para celebrar seu relacionamento com{" "}
            <strong>fotos</strong>, <strong>músicas</strong>,{" "}
            <strong>mensagens</strong> e <strong>muito mais</strong>
          </p>
          <a
            href="#"
            className="text-center w-[100%] mt-6 py-3 px-6 text-white font-bold capitalize bg-rosa-lovefy/90 rounded-xl text-lg shadow-intense-dark-rosa"
          >
            Montar Lovefy
          </a>
        </div>
        <img src="hero-mockup-04.png" alt="" className="w-full scale-[1.2]" />
      </section>
      <section
        id="how-it-works"
        className="w-full h-full flex justify-center flex-col py-14 px-4 bg-gradient-neutral"
      >
        <div className="w-[100%] h-full flex flex-col gap-10">
          <h2 className="mb-10 text-5xl text-neutral-600 font-medium text-center leading-[1em]">
            Como{" "}
            <span className="uppercase text-rosa-lovefy font-black">
              Funciona?
            </span>
          </h2>
          <div
            className="relative p-6 rounded-xl bg-rosa-lovefy shadow-lg w-[94%] h-[500px] overflow-hidden rotate-1"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="flex flex-col">
              <span className="font-black text-8xl text-white/40">1</span>
              <h3 className="text-2xl font-medium text-white/90 leading-[1.2em]">
                <span className="capitalize font-bold text-white/100">
                  Compartilhe
                </span>{" "}
                algumas{" "}
                <span className="capitalize font-bold text-white/100">
                  informações
                </span>{" "}
                conosco
              </h3>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="phone-mockupo.png"
                alt=""
                className="w-[90%] h-full object-contain absolute top-[38%]"
              />
            </div>
          </div>
          <div
            className="self-end relative p-6 rounded-xl bg-rosa-lovefy/90 shadow-lg w-[94%] h-[480px] overflow-hidden -rotate-1"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="flex flex-col">
              <span className="self-end font-black text-8xl text-white/40">
                2
              </span>
              <h3 className="text-2xl font-medium text-white/90 leading-[1.2em] text-end">
                Monte seu Lovefy e{" "}
                <span className="capitalize font-bold text-white/100">
                  realize o pagamento
                </span>{" "}
              </h3>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="payment.png"
                alt=""
                className="w-[90%] h-full object-contain absolute top-[16%] rotate-12"
              />
            </div>
          </div>
          <div
            className="relative p-6 rounded-xl bg-rosa-lovefy/80 shadow-lg w-[94%] h-[480px] overflow-hidden rotate-1"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="flex flex-col">
              <span className="font-black text-8xl text-white/40">3</span>
              <h3 className="text-2xl font-medium text-white/90 leading-[1.2em]">
                Pronto! Receba o{" "}
                <span className="capitalize font-bold text-white/100">
                  Lovefy
                </span>{" "}
                no seu e-mail{" "}
                <span className="capitalize font-bold text-white/100">
                  em poucos segundos
                </span>
              </h3>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="mail.png"
                alt=""
                className="w-[90%] h-full object-contain absolute top-[20%]"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="pricing"
        className="w-full h-full flex justify-center flex-col py-14 px-4 bg-white"
      >
        <div className="w-[100%] h-full flex flex-col gap-10">
          <h2
            data-aos="fade-left"
            data-aos-duration="1000"
            className="mb-10 text-5xl text-neutral-600 font-medium text-center leading-[1em]"
          >
            Nossos <br />
            <span className="uppercase text-rosa-lovefy font-black">
              Preços
            </span>
          </h2>
          <div className="w-full max-h-full grid grid-cols-1 gap-4">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="shadow w-full max-h-full flex flex-col rounded-xl bg-white border border-rosa-lovefy"
            >
              <div className="p-4 text-center text-white uppercase font-semibold min-w-full rounded-tl-xl rounded-tr-xl border border-rosa-lovefy bg-rosa-lovefy">
                <p className="text-lg">o mais vendido</p>
              </div>
              <div className="px-6 py-8 flex flex-col gap-2">
                <h3 className="text-neutral-600 font-black text-3xl uppercase leading-[1em]">
                  Lovefy <br />{" "}
                  <span className="text-4xl text-rosa-lovefy">Completo</span>
                </h3>
                <p className="text-sm text-neutral-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, odio?
                </p>
                <div className="flex items-center gap-2 mb-6">
                  <p className="text-neutral-600 line-through text-sm">
                    R$ 51,98
                  </p>
                  <p className="px-4 rounded-xl bg-light-rosa-lovefy font-semibold text-sm">
                    50% OFF
                  </p>
                </div>
                <p className="m-auto text-8xl font-black text-rosa-lovefy">
                  24,99
                </p>
                <button
                  onClick={redirectCompleto}
                  className="text-center w-[100%] mt-6 py-3 px-6 text-white font-bold capitalize bg-rosa-lovefy/90 rounded-xl text-lg shadow-intense-dark-rosa"
                >
                  Montar Lovefy Completo
                </button>
                <hr className="mt-6 mb-4" />
                <ul className="w-full max-h-full flex flex-col gap-6">
                  <li className="flex gap-2 text-neutral-600 font-medium">
                    <CheckCircle2 className="min-w-[24px] max-w-[24px] text-emerald-500" />
                    <span className="text-neutral-600 font-medium leading-[1.2em]">
                      Adicione até <strong>5 fotos do casal</strong>
                    </span>
                  </li>
                  <li className="flex gap-2 text-neutral-600 font-medium">
                    <CheckCircle2 className="min-w-[24px] max-w-[24px] text-emerald-500" />
                    <span className="text-neutral-600 font-medium leading-[1.2em]">
                      Inclua uma <strong>música</strong> que define a história
                      de vocês
                    </span>
                  </li>
                  <li className="flex gap-2 text-neutral-600 font-medium">
                    <CheckCircle2 className="min-w-[24px] max-w-[24px] text-emerald-500" />
                    <span className="text-neutral-600 font-medium leading-[1.2em]">
                      Grave e compartilhe <strong>áudios personalizados</strong>
                    </span>
                  </li>
                  <li className="flex gap-2 text-neutral-600 font-medium">
                    <CheckCircle2 className="min-w-[24px] max-w-[24px] text-emerald-500" />
                    <span className="text-neutral-600 font-medium leading-[1.2em]">
                      Garanta <strong>acesso vitalício</strong> ao seu Lovefy
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="shadow w-[95%] m-auto max-h-full flex flex-col rounded-xl bg-white border border-neutral-200"
            >
              <div className="p-4 flex flex-col gap-2">
                <div className="px-4 py-8 flex flex-col gap-2">
                  <h3 className="text-neutral-600 font-black text-3xl uppercase leading-[1em]">
                    Lovefy <br />{" "}
                    <span className="text-4xl text-rosa-lovefy">Simples</span>
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Optio, odio?
                  </p>
                  <p className="m-auto text-8xl font-black text-rosa-lovefy mt-6">
                    14,99
                  </p>
                  <button
                    onClick={redirectSimples}
                    type="button"
                    className="text-center w-[100%] mt-6 py-3 px-6 text-white font-bold capitalize bg-rosa-lovefy/90 rounded-xl text-lg shadow-intense-dark-rosa"
                  >
                    Montar Lovefy Simples
                  </button>
                  <hr className="mt-6 mb-4" />
                  <ul className="w-full max-h-full flex flex-col gap-6">
                    <li className="flex gap-2 text-neutral-600 font-medium">
                      <CheckCircle2 className="min-w-[24px] max-w-[24px] text-emerald-500" />
                      <span className="text-neutral-600 font-medium leading-[1.2em]">
                        Adicione até <strong>1 foto do casal</strong>
                      </span>
                    </li>
                    <li className="flex gap-2 text-neutral-600 font-medium">
                      <CheckCircle2 className="min-w-[24px] max-w-[24px] text-emerald-500" />
                      <span className="text-neutral-600 font-medium leading-[1.2em]">
                        Inclua uma <strong>música</strong> que define a história
                        de vocês
                      </span>
                    </li>
                    <li className="flex gap-2 text-neutral-600 font-medium">
                      <XCircle className="min-w-[24px] max-w-[24px] text-red-400" />
                      <span className="line-through text-neutral-600/80 font-medium leading-[1.2em]">
                        Grave e compartilhe{" "}
                        <strong>áudios personalizados</strong>
                      </span>
                    </li>
                    <li className="flex gap-2 text-neutral-600 font-medium">
                      <XCircle className="min-w-[24px] max-w-[24px] text-red-400" />
                      <span className="line-through text-neutral-600/80 font-medium leading-[1.2em]">
                        Garanta <strong>acesso vitalício</strong> ao seu Lovefy
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
