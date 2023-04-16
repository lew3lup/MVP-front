import axios from "axios";
import { ACCESS_TOKEN_KEY } from "shared/const/AccessTokenKey";

const $api = axios.create({
  baseURL: __API__,
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN_KEY)}`;
  return config;
});

export default $api;
