import api from "../api";

export const getDepartamento = async (id: any) => {
  const result = await api.get(`departamentos/${id}`);
  return result;
};

export const atualizaDepartamento = async () => {};
