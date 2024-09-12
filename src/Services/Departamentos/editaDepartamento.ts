import api from "../api";

export const getDepartamento = async (id: any) => {
  const result = await api.get(`departamentos/${id}`);
  return result;
};

export const atualizaDepartamento = async (payload: any) => {
  const result = await api.put(`departamentos/${payload.id}, payload`);
  return result;
};
