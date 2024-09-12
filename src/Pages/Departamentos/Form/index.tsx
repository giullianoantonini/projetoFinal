import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import { useNavigate, useParams } from "react-router-dom";
import insereDepartamento from "../../../Services/Departamentos/insereDepartamento";
import { getDepartamento } from "../../../Services/Departamentos/editaDepartamento";

const FormDepartamento = () => {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [sigla, setSigla] = useState("");
  const [temErroNome, setTemErroNome] = useState(false);
  const [temErroSigla, setTemErroSigla] = useState(false);
  const [erroAPI, setErroAPI] = useState("");
  const titulo = id ? "Edição" : "Cadastro";

  useEffect(() => {
    const buscaDados = async () => {
      if (id) {
        const result = await getDepartamento(id);
        setNome(result.data[0].nome);
        setSigla(result.data[0].sigla);
      }
    };
    buscaDados();
  });

  const validaFormulario = () => {
    setTemErroNome(false);
    setTemErroSigla(false);

    if (nome === "") {
      setTemErroNome(true);
      return false;
    }

    if (sigla === "") {
      setTemErroSigla(true);
      return false;
    }

    return true;
  };

  return (
    <>
      <div className="col-span-12">
        <div className="flex justify-between items-center my-6">
          <h2 className="text-2xl font-bold">{titulo} de Departamento</h2>
          <Button
            icon="pi pi-chevron-left"
            label="voltar"
            severity="info"
            rounded
            onClick={() => {
              navigate("/departamentos");
            }}
          />
        </div>
      </div>
      {/*  SEGUNDA LINHA */}
      <div className="col-span-6">
        <FloatLabel>
          <InputText
            id="nome"
            className="w-full"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <label htmlFor="nome">Nome</label>
        </FloatLabel>
        <div className="h-6">
          <small className="text-red-600" hidden={!temErroNome}>
            Nome inválido
          </small>
        </div>
      </div>

      <div className="col-span-6">
        <FloatLabel>
          <InputText
            id="sigla"
            value={sigla}
            onChange={(e) => setSigla(e.target.value)}
          />
          <label htmlFor="sigla">Sigla</label>
        </FloatLabel>
        <small className="text-red-600" hidden={!temErroSigla}>
          Sigla inválida
        </small>
      </div>

      {/* TERCEIRA LINHA */}
      <div className="col-span-12">
        <Button
          label="salvar"
          severity="success"
          icon="pi pi-save"
          className="w-full"
          onClick={async () => {
            if (validaFormulario()) {
              // Caso de sucesso
              try {
                await insereDepartamento({
                  nome,
                  sigla,
                });

                navigate("/departamentos");
              } catch (e: any) {
                if (e.response?.data?.message) {
                  setErroAPI(e.response?.data?.message);
                }
              }
            }
          }}
        />
      </div>

      {/* QUARTA LINHA */}
      <div className="col-span-12" hidden={erroAPI === ""}>
        <Message
          text={erroAPI}
          className="w-full"
          severity="error"
          hidden={true}
        />
      </div>
    </>
  );
};

export default FormDepartamento;
