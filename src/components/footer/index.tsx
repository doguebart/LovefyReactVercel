import { Link } from "react-router-dom";

export const Footer = () => {
  const now = new Date();

  return (
    <footer className="w-full max-h-full py-10 gap-10 flex flex-col bg-white">
      <div className="w-full flex flex-col items-center gap-2">
        <p className="text-lg font-bold text-rosa-ilovefy">iLovefy</p>
        <ul className="flex flex-col gap-1 items-center">
          <li>
            <a href="#" className=" text-center text-neutral-500 font-thin">
              Sobre nós
            </a>
          </li>
          <li>
            <a href="#" className=" text-center text-neutral-500 font-thin">
              Fale Conosco
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full flex flex-col items-center gap-2">
        <p className="text-lg font-bold text-rosa-ilovefy">
          Amor com Responsabilidade
        </p>
        <ul className="flex flex-col gap-1 items-center">
          <li>
            <Link
              to="/termos"
              className="text-center text-neutral-600 font-thin"
            >
              Termos e Condições
            </Link>
          </li>
          <li>
            <Link
              to="/politica-privacidade"
              className="text-center text-neutral-600 font-thin"
            >
              Política de Uso
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full flex flex-col gap-4 max-h-full px-4 bg-white">
        <p className="text-sm text-center text-neutral-600 font-thin">
          Nos encontre nas redes sociais
        </p>
        <ul className="w-full flex items-center justify-center gap-6">
          <li>
            <a href="#" className="w-[40px] h-[40px] bg-white rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#A0153E"
                  d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/lovefy.br?igsh=aTIzcm82ZTlicWpt&utm_source=qr"
              target="_blank"
              className="w-[40px] h-[40px] bg-white rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#A0153E"
                  d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="w-[40px] h-[40px] bg-white rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#A0153E"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="w-[40px] h-[40px] bg-white rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#A0153E"
                  d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="items-center gap-1 flex flex-col w-full max-h-full bg-white">
        <a
          href="mailto:suporte@ilovefy.com.br"
          className="text-neutral-600 text-sm font-thin"
        >
          suporte@ilovefy.com.br
        </a>
        <a
          href="mailto:contato@ilovefy.com.br"
          className="text-neutral-600 text-sm font-thin"
        >
          contato@ilovefy.com.br
        </a>
      </div>
      <span className="text-sm font-thin text-center text-neutral-600">
        Copyright © {now.getFullYear()} - Todos os direitos reservados
      </span>
    </footer>
  );
};
