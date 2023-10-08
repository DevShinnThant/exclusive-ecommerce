"use client";

import { useAuth } from "@/lib/hooks/useAuth";

export default function Home() {
  const { login } = useAuth();

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    try {
      await login("shin@gmail.com", "shinthant");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
        <label
          style={{
            marginTop: 10,
          }}
          htmlFor="password"
        >
          Password
        </label>
        <input id="password" name="password" type="password" />
        <button
          style={{
            marginTop: 15,
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
