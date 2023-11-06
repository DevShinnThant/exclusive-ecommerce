"use client";

// Packages
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Hooks
import { useAuthRegister } from "@/lib/store/server/auth/mutations";
import { useForm } from "react-hook-form";

// Icons
// import { ReloadIcon } from "@radix-ui/react-icons";
import GoogleIcon from "@/app/icons/organization/Google";

const signUpSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
});

type SchemaType = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const form = useForm<SchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const registerMutator = useAuthRegister();

  async function onSubmit(values: SchemaType) {
    registerMutator.mutate(values, {
      onSuccess: () => {
        form.reset();
      },
    });
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

          <Button
            className="w-full mt-2 h-10 bg-button_two hover:bg-button_hover"
            type="submit"
          >
            {/* {registerMutator.isLoading && (
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            )}{" "} */}
            Create Account
          </Button>

          <Button
            variant="outline"
            className="w-full cursor-not-allowed h-10 flex gap-4"
            type="submit"
            disabled
          >
            <GoogleIcon />
            <div>Sign Up with google</div>
          </Button>
        </form>
      </Form>
    </div>
  );
}
