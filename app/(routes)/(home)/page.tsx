"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div>
      <p className="w-20 h-20">Home</p>
    </div>
  );
}
