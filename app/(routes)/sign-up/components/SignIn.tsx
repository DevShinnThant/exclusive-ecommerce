"use client";

// Components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

// Packages
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Icons
import GoogleIcon from "@/app/icons/organization/Google";
// import { ReloadIcon } from "@radix-ui/react-icons";

// Hooks
import { useAuthLogin } from "@/lib/store/server/auth/mutations";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const signInSchema = z.object({
  identifier: z.string().email(),
  password: z.string().min(5, {
    message: "Password must be at least 2 characters.",
  }),
});

type SchemaType = z.infer<typeof signInSchema>;

export default function SignIn() {
  const router = useRouter();

  const form = useForm<SchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const signInMutator = useAuthLogin();

  async function onSubmit(values: SchemaType) {
    signInMutator.mutate(values, {
      onSuccess: () => {
        form.reset();
        router.push("/");
      },
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
            name="identifier"
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
            {/* {signInMutator.isLoading && (
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            )}{" "} */}
            Sign In
          </Button>

          <Button
            variant="outline"
            disabled
            className="w-full cursor-not-allowed h-10 flex gap-4"
          >
            <GoogleIcon />
            <div>Sign In with google</div>
          </Button>
        </form>
      </Form>
    </div>
  );
}
