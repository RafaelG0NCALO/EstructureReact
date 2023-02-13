import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Funcionarios = lazy(() => import("../pages/Funcionarios"));
const Contato = lazy(() => import("../pages/Contato"));

const Routers = () => {
  return (
    <Suspense
      fallback={
        <div className="fixed h-[100vh] w-[100vw] bg-slate-200 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-dashed border-2 border-sky-500 animate-spin"></div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="funcionarios" element={<Funcionarios />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
