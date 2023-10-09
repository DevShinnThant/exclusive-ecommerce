"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetAuthAtom } from "@/lib/store/client/atoms/auth-atom";
import { PersonIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { useAuth } from "@/lib/hooks/useAuth";
import { useToast } from "../ui/use-toast";
import Link from "next/link";

export default function AuthDropDown() {
  const { auth, setAuth } = useGetAuthAtom();

  const { toast } = useToast();

  const { logout } = useAuth();

  const handleLogOut = () => {
    logout();
    setAuth({
      token: "",
      username: "",
    });
    toast({
      title: "Success",
      description: "Logout successfully",
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center cursor-pointer">
          <PersonIcon className="cursor-pointer w-4 h-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <div className="text-sm pl-2 my-2">
            {auth.username || "Public User"}
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {auth.token ? (
          <DropdownMenuItem asChild>
            <Button
              onClick={() => handleLogOut()}
              className="h-5 text-xs py-4 w-full"
            >
              Logout
            </Button>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem asChild>
            <Link className="w-full" href="/sign-up">
              <Button className="w-full h-4 py-4 text-xs">Sign In</Button>
            </Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
