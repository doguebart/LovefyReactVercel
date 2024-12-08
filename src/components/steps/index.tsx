import { Camera, Mic } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Steps = () => {
  AOS.init();

  return (
    <div className="relative w-full max-h-full flex flex-col">
      <div className="z-10 flex flex-col w-full max-h-full">
        <div className="flex gap-2 md:gap-4" data-aos="fade-up">
          <div className="max-w-full flex flex-col items-center">
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] md:p-3 p-2 flex items-center justify-center rounded-full bg-rosa-lovefy">
              <span className="text-white font-black md:text-lg">1</span>
            </div>
            <div className="w-[2px] h-full bg-rosa-lovefy"></div>
          </div>
          <div
            className="w-full max-h-full flex flex-col mt-2 gap-4 pb-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="leading-[1.2em] font-semibold text-[20px] md:text-[24px] text-neutral-600">
              Crie seu{" "}
              <span className="capitalize font-bold text-rosa-lovefy">
                Lovefy personalizado
              </span>
            </p>
            <p className="text-neutral-600 text-sm md:text-lg">
              Crie um contador dinâmico de tempo de relacionamento. Preencha o
              formulário e receba o seu site personalizado + QR Code
            </p>
          </div>
        </div>
        <div className="flex gap-2 md:gap-4" data-aos="fade-up">
          <div className="max-w-full flex flex-col items-center">
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] md:p-3 p-2 flex items-center justify-center rounded-full bg-rosa-lovefy">
              <span className="text-white font-black md:text-lg">2</span>
            </div>
            <div className="w-[2px] h-full bg-rosa-lovefy"></div>
          </div>
          <div
            className="w-full max-h-full flex flex-col mt-2 gap-8 pb-10"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <p className="leading-[1.2em] font-semibold text-[20px] md:text-[24px] text-neutral-600">
              Preencha o{" "}
              <span className="capitalize font-bold text-rosa-lovefy">
                formulário
              </span>
            </p>
            <form className="flex flex-col gap-4 w-full max-h-full">
              <input
                type="text"
                placeholder="Seu nome completo"
                className="placeholder:text-lg md:h-[50px] h-[44px] outline-none border border-rosa-lovefy px-4 py-2 w-full rounded-xl placeholder:text-rosa-lovefy placeholder:font-medium text-neutral-600"
              />
              <input
                type="text"
                placeholder="Nome completo do seu amor"
                className="placeholder:text-lg md:h-[50px] h-[44px] outline-none border border-rosa-lovefy px-4 py-2 w-full rounded-xl placeholder:text-rosa-lovefy placeholder:font-medium text-neutral-600"
              />
              <input
                type="text"
                placeholder="Cole o link da musica aqui"
                className="placeholder:text-lg md:h-[50px] h-[44px] outline-none border border-rosa-lovefy px-4 py-2 w-full rounded-xl placeholder:text-rosa-lovefy placeholder:font-medium text-neutral-600"
              />
              <div className="relative w-full max-h-full flex items-center">
                <input
                  type="select"
                  readOnly
                  placeholder="Melhores fotos do casal"
                  className="placeholder:text-lg md:h-[50px] h-[44px] outline-none border border-rosa-lovefy px-4 pr-[48px] py-2 w-full rounded-xl placeholder:text-rosa-lovefy placeholder:font-medium text-neutral-600"
                />
                <button
                  type="button"
                  className="md:right-[10px] md:h-[38px] md:w-[38px] absolute right-[5px] h-[34px] w-[34px] border border-rosa-lovefy flex items-center justify-center rounded-xl bg-rosa-lovefy text-white"
                >
                  <Camera className="size-5" />
                </button>
              </div>
              <div className="relative w-full max-h-full flex items-center">
                <input
                  type="select"
                  readOnly
                  placeholder="Grave um áudio (opcional)"
                  className="placeholder:text-lg md:h-[50px] h-[44px] outline-none border border-rosa-lovefy px-4 pr-[48px] py-2 w-full rounded-xl placeholder:text-rosa-lovefy placeholder:font-medium text-neutral-600"
                />
                <button
                  type="button"
                  className="md:right-[10px] md:h-[38px] md:w-[38px] absolute right-[5px] h-[34px] w-[34px] border border-rosa-lovefy flex items-center justify-center rounded-xl bg-rosa-lovefy text-white"
                >
                  <Mic className="size-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex gap-2 md:gap-4" data-aos="fade-up">
          <div className="max-w-full flex flex-col items-center">
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] md:p-3 p-2 flex items-center justify-center rounded-full bg-rosa-lovefy">
              <span className="text-white font-black">3</span>
            </div>
            <div className="w-[2px] h-full bg-rosa-lovefy"></div>
          </div>
          <div
            className="w-full max-h-full flex flex-col mt-2 gap-8 pb-10"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <p className="leading-[1.2em] font-semibold text-[20px] md:text-[24px] text-neutral-600">
              Selecione uma opção e confira o{" "}
              <span className="capitalize font-bold text-rosa-lovefy">
                melhor resultado
              </span>{" "}
              para você
            </p>
          </div>
        </div>
      </div>
      <img
        src="/heart-ballon.png"
        alt="Imagem de coração"
        className="md:top-[14%] absolute z-0 top-[20%] right-[0%] w-[10%] opacity-[90%]"
        data-aos="fade-up"
        data-aos-duration="1500"
      />
      <img
        src="/heart-ballon.png"
        alt="Imagem de coração"
        className="md:left-[-10%] absolute z-0 top-[50%] left-[-3.5%] w-[9%] opacity-[85%]"
        data-aos="fade-up"
        data-aos-duration="2000"
      />
      <img
        src="/heart-ballon.png"
        alt="Imagem de coração"
        className="absolute z-0 top-[92%] right-[-3%] w-[8%] opacity-[80%]"
        data-aos="fade-up"
        data-aos-duration="2500"
      />
    </div>
  );
};
