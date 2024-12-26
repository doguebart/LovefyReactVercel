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
  const [mensagem, setMensagem] = useState("");
  const [erroMensagem, setErroMensagem] = useState<string | null>(null);

  const [nome, setNome] = useState("");
  const [erroNome, setErroNome] = useState<string | null>(null);
  const [nomeAmor, setNomeAmor] = useState("");
  const [erroNomeAmor, setErroNomeAmor] = useState<string | null>(null);

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserNodeRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const validarNome = (nome: string) => {
    const palavras = contarPalavras(nome);
    if (nome.length < 3) {
      return "O nome precisa ter pelo menos 3 letras.";
    } else if (palavras > 5) {
      return "O nome não pode ter mais de 5 palavras.";
    }
    return null;
  };

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

  const removerFoto = (index: number) => {
    setFotosSelecionadas((prevFotos) =>
      prevFotos.filter((_, i) => i !== index)
    );
  };

  return (
    <form className="px-4 w-full h-full flex flex-col gap-6">
      <div className="w-full max-h-full flex flex-col gap-1">
        <input
          type="text"
          className="border border-neutral-200 outline-none px-4 py-3 rounded-xl placeholder:text-neutral-600"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
            setErroNome(validarNome(e.target.value));
          }}
        />
        {erroNome && (
          <span className="pl-2 text-red-500 text-sm">{erroNome}</span>
        )}
      </div>
      <div className="w-full max-h-full flex flex-col gap-1">
        <input
          type="text"
          className="border border-neutral-200 outline-none px-4 py-3 rounded-xl placeholder:text-neutral-600"
          placeholder="Nome do seu amor"
          value={nomeAmor}
          onChange={(e) => {
            setNomeAmor(e.target.value);
            setErroNomeAmor(validarNome(e.target.value));
          }}
        />
        {erroNomeAmor && (
          <span className="pl-2 text-red-500 text-sm">{erroNomeAmor}</span>
        )}
      </div>
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
          <span className="left-2 absolute top-13 text-red-500 text-sm mt-1">
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

      {fotosSelecionadas.length > 0 ? (
        <div
          className={`w-full overflow-x-auto gap-4 p-2 ${
            fotosSelecionadas ? "flex" : "hidden"
          }`}
        >
          {fotosSelecionadas.map((foto, index) => (
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(foto)}
                alt={`Foto ${index + 1}`}
                className="min-h-28 min-w-28 max-h-28 max-w-28 object-cover rounded-xl"
              />
              <button
                type="button"
                className="absolute -top-2 -right-2 bg-rosa-ilovefy p-1 text-white rounded-full"
                onClick={() => removerFoto(index)}
              >
                <X className="size-5" />
              </button>
            </div>
          ))}
        </div>
      ) : null}

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
          {audioGravado && (
            <div className="w-full flex flex-col gap-2 items-center rounded-xl">
              <audio
                className="w-full bg-transparent"
                ref={audioRef}
                controls
                src={URL.createObjectURL(audioGravado)}
              />
            </div>
          )}

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
