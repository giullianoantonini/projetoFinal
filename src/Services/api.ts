import axios from "axios";

const api = axios.create({
  baseURL: "https://nodejsbackend-swart.vercel.app",
  timeout: 10000,
  headers: {
    "Content-type": "application/json",
  },
});

export default api
