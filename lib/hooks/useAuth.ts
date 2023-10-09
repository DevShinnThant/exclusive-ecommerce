import { LoginPayload, RegisterPayload } from "../store/server/auth/types";
import strapi from "../strapi";

export function useAuth() {
  const register = async (payload: RegisterPayload) => {
    const response = await strapi.register(payload);

    return response;
  };

  const login = async ({ identifier, password }: LoginPayload) => {
    const response = await strapi.login({ identifier, password });

    return response;
  };

  const logout = async () => {
    strapi.logout();
  };

  return { register, login, logout };
}
