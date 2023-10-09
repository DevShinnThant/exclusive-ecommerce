"use client";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import GoogleIcon from "@/app/icons/Google";

import { zodResolver } from "@hookform/resolvers/zod";
import { useGetAuthAtom } from "@/lib/store/client/atoms/auth-atom";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useAuth } from "@/lib/hooks/useAuth";
import { ReloadIcon } from "@radix-ui/react-icons";

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5, {
    message: "Password must be at least 2 characters.",
  }),
});

type SchemaType = z.infer<typeof signInSchema>;

export default function SignIn() {
  const { auth, setAuth } = useGetAuthAtom();

  const { login } = useAuth();

  const router = useRouter();

  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<SchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: SchemaType) {
    setIsLoading(true);

    await login(values.email, values.password)
      .then((response) => {
        setAuth({
          token: response.jwt,
          username: (response.user?.username as string) || "",
        });
        setIsLoading(false);
        form.reset();
        toast({
          title: "Success",
          description: "Sign Up Successfully",
        });
        router.push("/");
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }

  return (
    <div>
      <div className="text-4xl">Sign in an account</div>
      <div className="text-sm mt-4 mb-6">Enter your details below</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="w-[340px]"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    className="w-[340px]"
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            className="w-full mt-2 h-10 bg-button_two hover:bg-button_hover"
            type="submit"
          >
            {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}{" "}
            Sign In
          </Button>

          <Button
            variant="outline"
            className="w-full h-10 flex gap-4"
            type="submit"
          >
            <GoogleIcon />
            <div>Sign In with google</div>
          </Button>
        </form>
      </Form>
    </div>
  );
}
