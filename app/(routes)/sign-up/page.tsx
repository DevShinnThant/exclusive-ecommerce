import Image from "next/image";

import AuthCover from "@/public/images/Side Image.svg";
import SignUp from "./components/SignUp";

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
    <main className="main-container">
      <div className="flex gap-20 items-center pt-10">
        <div>
          <Image width={530} src={AuthCover} alt="Auth Cover Image" priority />
        </div>
        <div className="flex flex-1 flex-col items-start justify-start">
          <div className="text-4xl">Create an account</div>
          <div className="text-sm mt-4">Enter your details below</div>

          <div className="mt-10">
            <SignUp />
          </div>
        </div>
      </div>
    </main>
  );
}
