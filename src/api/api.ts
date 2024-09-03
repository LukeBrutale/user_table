import axios, { AxiosInstance } from "axios";
import { createUserService } from "./userService";

export const API_URL = "https://jsonplaceholder.typicode.com";

const $api: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

const userService = createUserService($api);

export default userService;
