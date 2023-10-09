import { LoginPayload, RegisterPayload } from "./types";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/lib/hooks/useAuth";
import { useMutation } from "react-query";
import { useAuthStore } from "../../client/authStore";
import { useRouter } from "next/navigation";

export const useAuthRegister = () => {
  const { register } = useAuth();
  const { setToken } = useAuthStore();
  const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: RegisterPayload) => register(payload),
    onSuccess: (response) => {
      setToken(response.jwt);
      toast({
        title: "Success",
        variant: "default",
        description: "Sign Up Successfully",
      });
      router.push("/");
    },
    onError: (err) => {
      toast({
        title: "Error",
        variant: "destructive",
        description: "Something went wrong!",
      });
    },
  });
};

export const useAuthLogin = () => {
  const { login } = useAuth();
  const { setToken } = useAuthStore();
  const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
    onSuccess: (response) => {
      setToken(response.jwt);
      toast({
        title: "Success",
        variant: "default",
        description: "Sign In Successfully",
      });
      router.push("/");
    },
    onError: (err) => {
      toast({
        title: "Error",
        variant: "destructive",
        description: "Something went wrong!",
      });
    },
  });
};

export const useAuthLogout = () => {
  const { logout } = useAuth();

  const { removeToken } = useAuthStore();

  const { toast } = useToast();

  return useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      removeToken();
      toast({
        title: "success",
        variant: "default",
        description: "Logout Successfully",
      });
    },
    onError: (err) => {
      toast({
        title: "Error",
        variant: "destructive",
        description: "Something went wrong!",
      });
    },
  });
};
