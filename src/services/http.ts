import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';

const axiosClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: { 'Content-Type': 'application/json' },
    timeout: 60000,
    withCredentials: false,
  });

  client.interceptors.request.use((config: any) => {
    config.headers = config.headers || {};
    return config;
  });

  client.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      console.error(error);
      throw error;
    }
  );

  return client;
};

export default axiosClient;
// https://javascript.plainenglish.io/axios-a-simple-and-effective-way-to-make-api-calls-in-react-with-typescript-f0b1e7eebdc5
