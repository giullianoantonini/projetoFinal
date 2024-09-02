import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const FormDepartamentos = () => {
  const [nome, setNome] = useState("");
  const [sigla, setSigla] = useState("");

  const handleCadastrar = () => {
    // Enviar os valores para o banco de dados
    console.log("Nome:", nome);
    console.log("Sigla:", sigla);
  };

  return (
    <>
      <div className="col-span-12">
        <h1>Departamentos</h1>
      </div>
      <div className="col-span-6">
        <InputText
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="w-full"
        />
      </div>
      <div className="col-span-6">
        <InputText
          placeholder="Sigla"
          value={sigla}
          onChange={(e) => setSigla(e.target.value)}
          required
          className="w-full"
        />
      </div>
      <div className="col-span-12">
        <Button
          label="Cadastrar"
          onClick={handleCadastrar}
          className="w-full"
          severity="success"
        />
      </div>
    </>
  );
};

export default FormDepartamentos;
