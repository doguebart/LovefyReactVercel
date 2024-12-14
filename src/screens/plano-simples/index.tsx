import { useState } from "react";
import { Formulario } from "../../components/form/formulario";

export const PlanoSimples = () => {
  const [planoAtivo, setPlanoAtivo] = useState("simples");

  const alternarPlano = () => {
    setPlanoAtivo(planoAtivo === "completo" ? "simples" : "completo");
  };

  return (
    <div className="py-10 w-[100%] h-full flex flex-col items-center justify-center gap-10 bg-gradient-lovefy">
      <h2 className="px-4 text-5xl text-white/60 font-medium text-center leading-[1.1em]">
        Crie seu <span className="uppercase text-white font-black">Lovefy</span>
      </h2>
      <div className="w-full px-4">
        <div className="w-full h-full bg-white flex items-center gap-2 p-2 rounded-xl">
          <div
            onClick={alternarPlano}
            className={`w-1/2 min-h-full p-2 rounded-xl shadow-lg cursor-pointer ${
              planoAtivo === "completo"
                ? "bg-rosa-lovefy text-white"
                : "bg-white text-rosa-lovefy border border-neutral-200"
            }`}
          >
            <p
              className={`text-center text-3xl font-semibold ${
                planoAtivo === "completo" ? "text-white" : "text-rosa-lovefy"
              }`}
            >
              <span className="font-medium text-lg">R$ </span>24,99
            </p>
            <p
              className={`leading-[1em] text-center uppercase font-semibold ${
                planoAtivo === "completo" ? "text-white" : "text-rosa-lovefy"
              }`}
            >
              Lovefy <br /> Completo
            </p>
          </div>
          <div
            onClick={alternarPlano}
            className={`w-1/2 min-h-full p-2 rounded-xl cursor-pointer ${
              planoAtivo === "simples"
                ? "bg-rosa-lovefy text-white"
                : "bg-white text-rosa-lovefy border border-neutral-200"
            }`}
          >
            <p
              className={`text-center text-3xl font-semibold ${
                planoAtivo === "simples" ? "text-white" : "text-rosa-lovefy"
              }`}
            >
              <span className="font-medium text-lg">R$ </span>14,99
            </p>
            <p
              className={`leading-[1em] text-center uppercase font-semibold ${
                planoAtivo === "simples" ? "text-white" : "text-rosa-lovefy"
              }`}
            >
              Lovefy <br /> Simples
            </p>
          </div>
        </div>
      </div>
      <Formulario planoAtivo={planoAtivo} />
      <div>
        <h2 className="px-4 text-3xl text-white/60 font-medium text-center leading-[1.1em]">
          Confira o <br />
          <span className="uppercase text-white font-black">Resultado</span>
        </h2>
      </div>
    </div>
  );
};
