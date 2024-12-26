import { CheckCircle2, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const redirectCompleto = () => {
    navigate("/plano/completo");
  };

  const redirectSimples = () => {
    navigate("/plano/simples");
  };

  return (
    <>
      <div className="w-[100%] h-full flex flex-col gap-10">
        <h2
          data-aos="fade-left"
          data-aos-duration="1000"
          className="mb-10 text-5xl text-neutral-600 font-medium text-center leading-[1em]"
        >
          Nossos <br />
          <span className="uppercase text-rosa-ilovefy font-black">Preços</span>
        </h2>
        <div className="w-full max-h-full grid grid-cols-1 gap-4">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="shadow w-full max-h-full flex flex-col rounded-xl bg-white border border-rosa-ilovefy"
          >
            <div className="p-4 text-center text-white uppercase font-semibold min-w-full rounded-tl-xl rounded-tr-xl border border-rosa-ilovefy bg-rosa-ilovefy">
              <p className="text-lg">o mais vendido</p>
            </div>
            <div className="px-6 py-8 flex flex-col gap-2">
              <h3 className="text-neutral-600 font-black text-3xl uppercase leading-[1em]">
                iLovefy <br />{" "}
                <span className="text-4xl text-rosa-ilovefy">Completo</span>
              </h3>
              <p className="text-sm text-neutral-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
                odio?
              </p>
              <div className="flex items-center gap-2 mb-6">
                <p className="text-neutral-600 line-through text-sm">
                  R$ 51,98
                </p>
                <p className="px-4 rounded-xl bg-light-rosa-ilovefy font-semibold text-sm">
                  50% OFF
                </p>
              </div>
              <p className="m-auto text-8xl font-black text-rosa-ilovefy">
                24,99
              </p>
              <button
                onClick={redirectCompleto}
                className="text-center w-[100%] mt-6 py-3 px-6 text-white font-bold capitalize bg-rosa-ilovefy/90 rounded-xl text-lg shadow-intense-dark-rosa"
              >
                Montar iLovefy Completo
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
                    Inclua uma <strong>música</strong> que define a história de
                    vocês
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
                    Garanta <strong>acesso vitalício</strong> ao seu iLovefy
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
              <div className="px-3 py-8 flex flex-col gap-2">
                <h3 className="text-neutral-600 font-black text-3xl uppercase leading-[1em]">
                  iLovefy <br />{" "}
                  <span className="text-4xl text-rosa-ilovefy">Simples</span>
                </h3>
                <p className="text-sm text-neutral-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, odio?
                </p>
                <p className="m-auto text-8xl font-black text-rosa-ilovefy mt-6">
                  14,99
                </p>
                <button
                  onClick={redirectSimples}
                  type="button"
                  className="text-center w-[100%] mt-6 py-3 px-6 text-white font-bold capitalize bg-rosa-ilovefy/90 rounded-xl text-lg shadow-intense-dark-rosa"
                >
                  Montar iLovefy Simples
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
                      Grave e compartilhe <strong>áudios personalizados</strong>
                    </span>
                  </li>
                  <li className="flex gap-2 text-neutral-600 font-medium">
                    <XCircle className="min-w-[24px] max-w-[24px] text-red-400" />
                    <span className="line-through text-neutral-600/80 font-medium leading-[1.2em]">
                      Garanta <strong>acesso vitalício</strong> ao seu iLovefy
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
