import axios, { AxiosInstance } from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig: config } = getConfig();

const api: AxiosInstance = axios.create({
  baseURL: config.PUBLIC_API,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  // here to catch intercertions

  return config;
});


export default api;
