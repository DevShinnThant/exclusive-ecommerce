"use client";

import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

export default function AuthForm() {
  const [formType, setFormType] = useState<"signIn" | "signUp">("signUp");
  return (
    <div className="h-[400px]">
      {formType === "signUp" ? (
        <SignUp onFormChange={setFormType} />
      ) : (
        <SignIn onFormChange={setFormType} />
      )}
    </div>
  );
}
