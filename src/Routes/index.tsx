import { Routes, Route } from "react-router-dom";
import Departamentos from "../Pages/Departamentos/Listagem";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>}></Route>
      <Route path="/departamentos" element={<Departamentos />}></Route>
      <Route
        path="/departamentos/new"
        element={<h1>Cadastro de Departamentos</h1>}
      ></Route>
      <Route
        path="/departamentos/edit/:id"
        element={<h1>Edição de Departamentos</h1>}
      ></Route>
      <Route path="*" element={<h1>404 - Não Encontrado</h1>}></Route>
    </Routes>
  );
};

export default AppRoutes;
