// Icons

import SearchInput from "../input/SearchInput";
import Link from "next/link";
import AuthDropDown from "./AuthDropDown";
import WishlistIcon from "@/app/icons/navbar/Wishlist";

import CartSlider from "../cart/CartSlider";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-20 flex items-center">
      <div className="w-full bg-background h-20 border-b-[0.1px] border-button flex justify-center items-center">
        <div className="w-full max-width pt-4 pb-2 grid grid-cols-12">
          <div className="col-span-3 flex justify-start items-center">
            <Link href="/" className="tracking-wide text-xl font-semibold">
              Exclusive
            </Link>
          </div>

          <div className="col-span-5 gap-14 flex items-center">
            {navlinks.map((link) => (
              <Link className="text-link" key={link.id} href={link.pathname}>
                {link.name}
              </Link>
            ))}
          </div>

          <div className="col-span-4 flex justify-end items-center gap-6">
            <SearchInput />
            <div className="cursor-pointer flex items-center gap-5">
              <WishlistIcon />
              <CartSlider />
            </div>
          </div>
        </div>

        <div className="mr-3">
          <AuthDropDown />
        </div>
      </div>
    </div>
  );
}

const navlinks = [
  {
    id: 0,
    name: "Home",
    pathname: "/",
  },
  {
    id: 1,
    name: "Contact",
    pathname: "/contact",
  },
  {
    id: 2,
    name: "About",
    pathname: "/about",
  },
  {
    id: 3,
    name: "Sign Up",
    pathname: "/sign-up",
  },
];
