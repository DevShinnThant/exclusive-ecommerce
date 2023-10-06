// hooks/useAuth.ts
import { signIn, signOut, useSession } from "next-auth/react";
import strapi from "../strapi";

export function useAuth() {
  const { data: session, status: loading } = useSession();

  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    const response = await strapi.register({ username, email, password });
    signIn("credentials", { email, password });
    return response;
  };

  const login = async (identifier: string, password: string) => {
    const response = await strapi.login({ identifier, password });
    signIn("credentials", { identifier, password });
    return response;
  };

  const logout = async () => {
    await strapi.logout();
    signOut();
  };

  return { session, loading, register, login, logout };
}
