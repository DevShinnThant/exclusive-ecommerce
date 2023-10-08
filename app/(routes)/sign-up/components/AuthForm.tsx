"use client";

import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

export default function AuthForm() {
  const [formType, setFormType] = useState<"signIn" | "signUp">("signUp");
  return (
    <div className="h-[600px] flex justify-center items-center">
      <div>
        {formType === "signUp" ? (
          <div>
            <SignUp />
            <div className="text-xs mt-3 m-auto w-fit">
              Already have account?{" "}
              <span
                onClick={() => setFormType("signIn")}
                className="underline ml-2 cursor-pointer"
              >
                Login
              </span>
            </div>
          </div>
        ) : null}

        {formType === "signIn" ? (
          <div>
            <SignIn />
            <div className="text-xs mt-3 m-auto w-fit">
              Do not have account?
              <span
                onClick={() => setFormType("signUp")}
                className="underline ml-2 cursor-pointer"
              >
                Sign Up
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
