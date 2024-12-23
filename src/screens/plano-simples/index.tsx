import { useState } from "react";
import { Formulario } from "../../components/form/formulario";
import { PreviewIlovefy } from "../../components/preview-ilovefy";
import { useNavigate } from "react-router-dom";

export const PlanoSimples = () => {
  const [planoAtivo, setPlanoAtivo] = useState("simples");
  const navigate = useNavigate();

  const alternarPlano = () => {
    setPlanoAtivo(planoAtivo === "completo" ? "simples" : "completo");
  };

  const pagamento = () => {
    navigate("/página de pagamento");
  };

  return (
    <div className="py-10 w-[100%] h-full flex flex-col items-center justify-center gap-10 bg-gradient-neutral">
      <h2 className="px-4 text-5xl text-neutral-600 font-medium text-center leading-[1.1em]">
        Crie seu{" "}
        <span className="uppercase text-rosa-ilovefy font-black">iLovefy</span>
      </h2>
      <div className="w-full px-4">
        <div className="w-full h-full bg-white flex items-center gap-2 p-2 rounded-xl">
          <div
            onClick={alternarPlano}
            className={`w-1/2 min-h-full p-2 rounded-xl shadow-lg cursor-pointer ${
              planoAtivo === "completo"
                ? "bg-rosa-ilovefy text-white"
                : "bg-white text-rosa-ilovefy border border-neutral-200"
            }`}
          >
            <p
              className={`text-center text-3xl font-semibold ${
                planoAtivo === "completo" ? "text-white" : "text-rosa-ilovefy"
              }`}
            >
              <span className="font-medium text-lg">R$ </span>24,99
            </p>
            <p
              className={`leading-[1em] text-center uppercase font-semibold ${
                planoAtivo === "completo" ? "text-white" : "text-rosa-ilovefy"
              }`}
            >
              iLovefy <br /> Completo
            </p>
          </div>
          <div
            onClick={alternarPlano}
            className={`w-1/2 min-h-full p-2 rounded-xl shadow-lg cursor-pointer ${
              planoAtivo === "simples"
                ? "bg-rosa-ilovefy text-white"
                : "bg-white text-rosa-ilovefy border border-neutral-200"
            }`}
          >
            <p
              className={`text-center text-3xl font-semibold ${
                planoAtivo === "simples" ? "text-white" : "text-rosa-ilovefy"
              }`}
            >
              <span className="font-medium text-lg">R$ </span>14,99
            </p>
            <p
              className={`leading-[1em] text-center uppercase font-semibold ${
                planoAtivo === "simples" ? "text-white" : "text-rosa-ilovefy"
              }`}
            >
              iLovefy <br /> Simples
            </p>
          </div>
        </div>
      </div>
      <Formulario planoAtivo={planoAtivo} />
      <div className="w-full px-4 flex flex-col gap-10">
        <h2 className="px-4 text-3xl text-neutral-600 font-medium text-center leading-[1.1em]">
          Confira o <br />
          <span className="uppercase text-rosa-ilovefy font-black">
            Resultado
          </span>
        </h2>
        <PreviewIlovefy />
        <button
          type="button"
          className="text-center w-[80%] m-auto py-3 px-6 text-white font-bold bg-rosa-ilovefy/90 rounded-xl text-lg shadow-intense-dark-rosa"
          onClick={pagamento}
        >
          Ir para o Pagamento
        </button>
      </div>
    </div>
  );
};
