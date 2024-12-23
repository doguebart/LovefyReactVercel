export const Steps = () => {
  return (
    <>
      <div className="w-[100%] h-full flex flex-col gap-10">
        <h2 className="mb-10 text-5xl text-neutral-600 font-medium text-center leading-[1em]">
          Como{" "}
          <span className="uppercase text-rosa-ilovefy font-black">
            Funciona?
          </span>
        </h2>
        <div
          className="relative p-6 rounded-xl bg-rosa-ilovefy/70 shadow-lg w-[94%] h-[500px] overflow-hidden rotate-1"
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
              src="phone-mockup.png"
              alt=""
              className="w-[90%] h-full object-contain absolute top-[38%]"
            />
          </div>
        </div>
        <div
          className="self-end relative p-6 rounded-xl bg-rosa-ilovefy/80 shadow-lg w-[94%] h-[480px] overflow-hidden -rotate-1"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="flex flex-col">
            <span className="self-end font-black text-8xl text-white/40">
              2
            </span>
            <h3 className="text-2xl font-medium text-white/90 leading-[1.2em] text-end">
              Seu iLovefy foi criado!{" "}
              <span className="capitalize font-bold text-white/100">
                Finalize o pagamento
              </span>
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
          className="z-50 relative p-6 rounded-xl bg-rosa-ilovefy/90 shadow-lg w-[94%] h-[480px] overflow-hidden rotate-1"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="flex flex-col">
            <span className="font-black text-8xl text-white/40">3</span>
            <h3 className="text-2xl font-medium text-white/90 leading-[1.2em]">
              <span className="capitalize font-bold text-white/100">
                Receba na hora!
              </span>{" "}
              Tanto no site quanto em{" "}
              <span className="capitalize font-bold text-white/100">
                seu email
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
        <div
          className="self-end relative p-6 rounded-xl bg-rosa-ilovefy shadow-lg w-[94%] h-[540px] overflow-hidden -rotate-1"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="flex flex-col">
            <span className="self-end font-black text-8xl text-white/40">
              4
            </span>
            <h3 className="text-2xl font-medium text-white/90 leading-[1.2em] text-end">
              Pronto!{" "}
              <span className="capitalize font-bold text-white/100">
                Surpreenda a pessoa que você ama{" "}
              </span>
              com link ou QR Code
            </h3>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="phone-mockup.png"
              alt=""
              className="w-[90%] h-full object-contain absolute top-[38%]"
            />
          </div>
        </div>
      </div>
      <img
        src="blob-shape.png"
        alt=""
        className="absolute -bottom-[16em] -left-[0%] scale-[1.2]"
      />
    </>
  );
};
