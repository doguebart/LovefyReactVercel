import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div className="px-4 flex flex-col justify-center items-center h-screen text-center gap-4 bg-gradient-neutral">
      <img src="404 Error-bro.png" alt="" className="w-full" />
      <Link to="/" className="px-4 py-2 rounded-xl bg-rosa-ilovefy text-white">
        Voltar ao início
      </Link>
    </div>
  );
};
