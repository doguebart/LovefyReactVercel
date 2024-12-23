import { Route, Routes } from "react-router-dom";
import { Home } from "../screens/home";
import { PlanoSimples } from "../screens/plano-simples";
import { PlanoCompleto } from "../screens/plano-completo";
import { Error404 } from "../screens/404";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plano/simples" element={<PlanoSimples />} />
      <Route path="/plano/completo" element={<PlanoCompleto />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};
