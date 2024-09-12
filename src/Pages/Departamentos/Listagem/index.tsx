import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import listaDepartamentos from "../../../Services/Departamentos/listaDepartamentos";
import excluiDepartamento from "../../../Services/Departamentos/excluiDepartamento";
import { Message } from "primereact/message";
import SubHeader from "../../../Components/SubHeader";

const Departamentos = () => {
  const navigate = useNavigate();
  const [departamentos, setDepartamentos] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (!departamentos) {
      listaDepartamentos({ setDepartamentos, setLoading });
    }
  }, [departamentos]);

  const containerErro = () => {
    return (
      <div className="text-left w-full flex justify-between items-center">
        {erro}
        <Button
          icon="pi pi-times"
          severity="danger"
          rounded
          onClick={() => {
            setErro("");
          }}
        />
      </div>
    );
  };

  const bodyAcao = (departamento: any) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          rounded
          severity="warning"
          className="mr-2"
          onClick={() => {
            const { id_departamento } = departamento;
            navigate(`/departamentos/edit/${id_departamento}`);
          }}
        />
        <Button
          icon="pi pi-trash"
          rounded
          loading={loadingDelete}
          severity="danger"
          onClick={async () => {
            setLoadingDelete(true);
            try {
              await excluiDepartamento(departamento.id_departamento);
              navigate(0);
            } catch (e: any) {
              if (e.response?.data?.message) {
                const mensagem = `[${departamento.nome}] ${e.response?.data?.message}`;
                setErro(mensagem);
              }
              setLoadingDelete(false);
            }
          }}
        />
      </>
    );
  };

  return (
    <>
      <SubHeader
        title="Listagem de Departamento"
        icon="pi-plus"
        label="novo"
        severity="info"
        route="/departamentos/new"
      />

      <div className="col-span-12" hidden={erro === ""}>
        <Message
          content={containerErro}
          className="w-full"
          severity="error"
        ></Message>
      </div>

      <div className="col-span-12">
        <DataTable value={departamentos} loading={loading}>
          <Column field="sigla" header="Sigla" />
          <Column field="nome" header="Nome" />
          <Column header="Ação" body={bodyAcao} />
        </DataTable>
      </div>
    </>
  );
};

export default Departamentos;
