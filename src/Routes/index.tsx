import { Routes, Route } from "react-router-dom";
import Departamentos from "../Pages/Departamentos/Listagem";
import FormDepartamentos from "../Pages/Departamentos/Form";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>}></Route>
      <Route path="/departamentos" element={<Departamentos />}></Route>
      <Route path="/departamentos/new" element={<FormDepartamentos />}></Route>
      <Route
        path="/departamentos/edit/:id"
        element={<FormDepartamentos/>}
      ></Route>
      <Route path="*" element={<h1>404 - Não Encontrado</h1>}></Route>
    </Routes>
  );
};

export default AppRoutes;
