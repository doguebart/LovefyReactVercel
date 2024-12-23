import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleCollapse = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div
        className="w-[100%] h-full flex flex-col gap-10"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h2 className="mb-10 text-5xl text-neutral-600 font-medium text-center leading-[1em]">
          Perguntas{" "}
          <span className="uppercase text-rosa-ilovefy font-black">
            Frequentes
          </span>
        </h2>
        <div className="flex flex-col gap-8">
          {[
            {
              question: "O que é o iLovefy?",
              answer:
                "iLovefy é uma plataforma onde casais podem criar páginas personalizadas para celebrar seu relacionamento, com fotos, áudios, músicas e a contagem do tempo juntos.",
            },
            {
              question: "O iLovefy é gratuito?",
              answer:
                "Não! O iLovefy oferece dois planos pagos: o 'iLovefy Simples', por R$ 14,00, que inclui os recursos essenciais, e o 'iLovefy Completo', por R$ 24,99, que conta com recursos adicionais para uma experiência mais personalizada.",
            },
            {
              question: "Quais são as formas de pagamento aceitas?",
              answer: "Aceitamos cartões de crédito, débito e PIX.",
            },
            {
              question: "Quando vou receber meu iLovefy?",
              answer:
                "Você recebe seu iLovefy imediatamente após a conclusão do pagamento. A página personalizada estará disponível no nosso site e você também receberá o link de acesso por e-mail.",
            },
            {
              question: "Como posso entrar em contato com o suporte?",
              answer:
                "Se tiver dúvidas ou enfrentar problemas técnicos, você pode entrar em contato conosco pelo e-mail suporte@ilovefy.com.br.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-2 ${
                openIndex === index ? "" : "border-b border-neutral-300"
              }`}
            >
              <div
                className="flex justify-between py-2 cursor-pointer"
                onClick={() => toggleCollapse(index)}
              >
                <p
                  className={`font-medium text-xl pr-6 ${
                    openIndex === index
                      ? "text-rosa-ilovefy font-semibold"
                      : "text-neutral-600"
                  }`}
                >
                  {item.question}
                </p>
                <ChevronDown
                  className={`min-w-[20px] max-w-[20px] min-h-[20px] max-h-[20px] ${
                    openIndex === index
                      ? "text-rosa-ilovefy rotate-180 duration-150"
                      : "text-neutral-500"
                  }`}
                />
              </div>
              {openIndex === index && (
                <div>
                  <p className="text-neutral-600 font-normal text-justify tracking-tighter">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
