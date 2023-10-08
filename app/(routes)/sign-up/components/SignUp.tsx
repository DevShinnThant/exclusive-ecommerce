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
import { Dispatch, SetStateAction } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/lib/hooks/useAuth";

const signUpSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  password: z.string().min(5, {
    message: "Password must be at least 2 characters.",
  }),
  image: z.string(),
});

type SchemaType = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const { register } = useAuth();

  const form = useForm<SchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      image: "",
    },
  });

  async function onSubmit(values: SchemaType) {
    const response = await register(
      values.username,
      values.email,
      values.password
      // values.image
    );
  }

  return (
    <div>
      <div className="text-4xl">Create an account</div>
      <div className="text-sm mt-4 mb-6">Enter your details below</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    className="w-[340px]"
                    placeholder="Enter your name"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
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
                    type="password"
                    className="w-[340px]"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    className="w-[340px]"
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
            Create Account
          </Button>

          <Button
            variant="outline"
            className="w-full h-10 flex gap-4"
            type="submit"
          >
            <GoogleIcon />
            <div>Sign Up with google</div>
          </Button>
        </form>
      </Form>
    </div>
  );
}
