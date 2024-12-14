import { Copy, Mic, Image } from "lucide-react";

export const Formulario = ({ planoAtivo }) => {
  return (
    <form className="px-4 w-full h-full flex flex-col gap-6">
      <input
        type="text"
        className="outline-none px-4 py-3 rounded-xl placeholder:text-neutral-600"
        placeholder="Seu nome completo"
      />
      <input
        type="text"
        className="outline-none px-4 py-3 rounded-xl placeholder:text-neutral-600"
        placeholder="Nome completo do seu amor"
      />
      <div className="w-full max-h-full relative">
        <input
          type="text"
          className="w-full outline-none px-4 py-3 rounded-xl placeholder:text-neutral-600"
          placeholder="Cole o link da música (Youtube)"
        />
        <button
          type="button"
          className="absolute bg-rosa-lovefy text-white p-2 rounded-xl right-2 top-1/2 transform -translate-y-1/2"
        >
          <Copy className="size-5" />
        </button>
      </div>
      <div className="w-full max-h-full relative">
        <input
          readOnly
          type="text"
          className="w-full outline-none px-4 py-3 rounded-xl placeholder:text-neutral-600"
          placeholder={
            planoAtivo === "completo"
              ? "Escolha as fotos do casal"
              : "Escolha a foto do casal"
          }
        />
        <button
          type="button"
          className="absolute bg-rosa-lovefy text-white p-2 rounded-xl right-2 top-1/2 transform -translate-y-1/2"
        >
          <Image className="size-5" />
        </button>
      </div>
      {planoAtivo === "completo" && (
        <div className="w-full max-h-full relative">
          <input
            readOnly
            type="text"
            className="w-full outline-none px-4 py-3 rounded-xl placeholder:text-neutral-600"
            placeholder="Grave um áudio (opcional)"
          />
          <button
            type="button"
            className="absolute bg-rosa-lovefy text-white p-2 rounded-xl right-2 top-1/2 transform -translate-y-1/2"
          >
            <Mic className="size-5" />
          </button>
        </div>
      )}
    </form>
  );
};
