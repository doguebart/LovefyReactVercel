import { Copy, Mic, Image, StopCircle, Check, X } from "lucide-react";
import { useState, useRef } from "react";

interface FormularioProps {
  planoAtivo: string;
}

export const Formulario = ({ planoAtivo }: FormularioProps) => {
  const [musicaLink, setMusicaLink] = useState("");
  const [fotosSelecionadas, setFotosSelecionadas] = useState<File[]>([]);
  const [audioGravado, setAudioGravado] = useState<Blob | null>(null);
  const [gravando, setGravando] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [erroLink, setErroLink] = useState<string | null>(null);
  const [mensagem, setMensagem] = useState(""); // Novo estado para a mensagem do textarea
  const [erroMensagem, setErroMensagem] = useState<string | null>(null); // Erro para a validação de palavras

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserNodeRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);

  const validarLinkYoutube = (link: string): boolean => {
    const youtubeRegex =
      /^(https?\:\/\/)?(www\.)?(youtube|youtu|youtube-nocookie)\.(com|be)\/(watch\?v=|playlist\?list=)[A-Za-z0-9_-]{11}$/;
    return youtubeRegex.test(link);
  };

  const colarLink = async () => {
    try {
      const texto = await navigator.clipboard.readText();

      if (validarLinkYoutube(texto)) {
        setMusicaLink(texto);
        setErroLink(null);
      } else {
        setErroLink("Por favor, cole um link válido do YouTube.");
        setMusicaLink("");
      }
    } catch (error) {
      console.error("Erro ao colar o link", error);
      setErroLink("Erro ao tentar colar o link.");
    }
  };

  const apagarLink = () => {
    setMusicaLink("");
  };

  const selecionarFoto = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.multiple = planoAtivo === "completo";
    input.onchange = (e) => {
      const files = (e.target as HTMLInputElement).files;
      if (files) {
        const fotosArray = Array.from(files).filter((file) =>
          file.type.startsWith("image/")
        );
        if (fotosArray.length > 0) {
          if (
            planoAtivo === "completo" &&
            fotosArray.length + fotosSelecionadas.length <= 5
          ) {
            setFotosSelecionadas((prevFotos) => [...prevFotos, ...fotosArray]);
          } else if (planoAtivo === "simples" && fotosArray.length === 1) {
            setFotosSelecionadas(fotosArray);
          }
        }
      }
    };
    input.click();
  };

  const iniciarGravacao = () => {
    if (navigator.mediaDevices) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          const recorder = new MediaRecorder(stream);
          setMediaRecorder(recorder);
          recorder.ondataavailable = (e) => {
            setAudioGravado(e.data);
          };
          recorder.start();
          setGravando(true);

          audioContextRef.current = new AudioContext();
          analyserNodeRef.current = audioContextRef.current.createAnalyser();
          analyserNodeRef.current.fftSize = 256;
          dataArrayRef.current = new Uint8Array(
            analyserNodeRef.current.frequencyBinCount
          );

          const source =
            audioContextRef.current.createMediaStreamSource(stream);
          source.connect(analyserNodeRef.current);
        })
        .catch((error) => console.error("Erro ao acessar microfone", error));
    }
  };

  const pararGravacao = () => {
    mediaRecorder?.stop();
    setGravando(false);
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
  };

  const contarPalavras = (texto: string): number => {
    return texto.trim().split(/\s+/).length;
  };

  const validarMensagem = () => {
    const numeroDePalavras = contarPalavras(mensagem);
    if (numeroDePalavras < 20) {
      setErroMensagem("A mensagem precisa de no mínimo 20 palavras.");
      return false;
    } else if (numeroDePalavras > 60) {
      setErroMensagem("Número máximo de palavras atingido.");
      return false;
    } else {
      setErroMensagem(null);
      return true;
    }
  };

  return (
    <form className="px-4 w-full h-full flex flex-col gap-6">
      <input
        type="text"
        className="border border-neutral-200 outline-none px-4 py-3 rounded-xl placeholder:text-neutral-600"
        placeholder="Seu nome"
      />
      <input
        type="text"
        className="border border-neutral-200 outline-none px-4 py-3 rounded-xl placeholder:text-neutral-600"
        placeholder="Nome do seu amor"
      />
      <div className={`w-full max-h-full relative ${erroLink ? "mb-4" : ""}`}>
        <div>
          <input
            readOnly
            type="text"
            value={musicaLink}
            onChange={(e) => setMusicaLink(e.target.value)}
            className="border border-neutral-200 w-full outline-none px-4 py-3 rounded-xl placeholder:text-neutral-600 text-ellipsis pr-16"
            placeholder="Cole o link da música (Youtube)"
          />
          <button
            type="button"
            className="absolute bg-rosa-ilovefy text-white p-2 rounded-xl right-2 top-1/2 transform -translate-y-1/2"
            onClick={colarLink}
          >
            {musicaLink && validarLinkYoutube(musicaLink) ? (
              <Check className="size-5" />
            ) : (
              <Copy className="size-5" />
            )}
          </button>
          {musicaLink && validarLinkYoutube(musicaLink) && (
            <button
              type="button"
              className="absolute bg-rosa-ilovefy text-white p-2 rounded-xl right-2 top-1/2 transform -translate-y-1/2"
              onClick={apagarLink}
            >
              <X className="size-5" />
            </button>
          )}
        </div>
        {erroLink && (
          <span className="left-2 absolute top-12 text-red-500 text-sm mt-1">
            {erroLink}
          </span>
        )}
      </div>
      <div className="w-full max-h-full relative">
        <input
          readOnly
          type="text"
          className="border border-neutral-200 w-full outline-none px-4 py-3 rounded-xl placeholder:text-neutral-600"
          placeholder={
            planoAtivo === "completo"
              ? "Escolha até 5 fotos do casal"
              : "Escolha a foto do casal"
          }
          value={
            fotosSelecionadas.length > 0
              ? fotosSelecionadas.length > 1
                ? `Fotos selecionadas: ${fotosSelecionadas.length}`
                : "Foto selecionada"
              : ""
          }
        />
        <button
          type="button"
          className="absolute bg-rosa-ilovefy text-white p-2 rounded-xl right-2 top-1/2 transform -translate-y-1/2"
          onClick={selecionarFoto}
        >
          <Image className="size-5" />
        </button>
      </div>
      {planoAtivo === "completo" && (
        <>
          <div className="w-full max-h-full relative">
            <input
              readOnly
              type="text"
              className="border border-neutral-200 w-full outline-none px-4 py-3 rounded-xl placeholder:text-neutral-600"
              placeholder="Grave um áudio (opcional)"
              value={audioGravado ? "Áudio gravado" : ""}
            />
            <button
              type="button"
              className="absolute bg-rosa-ilovefy text-white p-2 rounded-xl right-2 top-1/2 transform -translate-y-1/2"
              onClick={gravando ? pararGravacao : iniciarGravacao}
            >
              {gravando ? (
                <StopCircle className="size-5" />
              ) : (
                <Mic className="size-5" />
              )}
            </button>
          </div>
          <div className="w-full max-h-full flex flex-col gap-1">
            <textarea
              placeholder="Escreva uma mensagem para a pessoa que você ama!"
              value={mensagem}
              onChange={(e) => {
                setMensagem(e.target.value);
                validarMensagem();
              }}
              className="min-h-[200px] border border-neutral-200 outline-none px-4 py-3 rounded-xl placeholder:text-neutral-600"
            ></textarea>
            {erroMensagem && (
              <span className="pl-2 text-red-500 text-sm">{erroMensagem}</span>
            )}
          </div>
        </>
      )}
    </form>
  );
};
