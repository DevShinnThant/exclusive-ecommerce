// hooks/useAuth.ts
import strapi from "../strapi";

export function useAuth() {
  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    const response = await strapi.register({ username, email, password });

    return response;
  };

  const login = async (identifier: string, password: string) => {
    const response = await strapi.login({ identifier, password });

    return response;
  };

  const logout = async () => {
    await strapi.logout();
  };

  return { register, login, logout };
}
