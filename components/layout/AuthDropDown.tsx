"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";
import { useAuth } from "@/lib/hooks/useAuth";
import { useToast } from "../ui/use-toast";
import Link from "next/link";
import { useAuthLogout } from "@/lib/store/server/auth/mutations";
import { useAuthStore } from "@/lib/store/client/authStore";
import UserIcon from "@/app/icons/navbar/User";

export default function AuthDropDown() {
  const { token } = useAuthStore();
  const logoutMutator = useAuthLogout();

  const handleLogOut = () => {
    logoutMutator.mutate();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button name="setting" aria-label="Auth Setting Icon" variant="ghost">
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <div className="text-sm pl-2 my-2">
              {token ? "Authenticated" : "Public User"}
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {token ? (
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
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
