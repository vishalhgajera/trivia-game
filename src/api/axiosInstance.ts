import axios, { AxiosInstance } from 'axios';

const API_URL = "https://opentdb.com/api.php";

const instance: AxiosInstance = axios.create({
  baseURL: API_URL,
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
