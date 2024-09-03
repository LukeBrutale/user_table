import { AxiosInstance, AxiosResponse } from "axios";

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
}

export const createUserService = (api: AxiosInstance) => ({
  getUsers: async (): Promise<AxiosResponse<User[]>> => {
    return api.get<User[]>("/users");
  },
});
