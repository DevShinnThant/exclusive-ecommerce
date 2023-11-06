import Image from "next/image";

import AuthCover from "@/public/images/side-image.png";
import AuthForm from "./components/AuthForm";

export const metadata = {
  title: "Sign Up",
  openGraph: {
    title: "Sign Up",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/sign-up`,
  },
  twitter: { title: "Sign Up" },
};

export default function Auth() {
  return (
    <main className="main-container ">
      <div className="flex gap-20 items-center py-10">
        <Image width={560} src={AuthCover} alt="Auth Cover Image" priority />
        <AuthForm />
      </div>
    </main>
  );
}
