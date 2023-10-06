"use client";

// Components
import { NavigationMenu, NavigationMenuLink } from "../ui/navigation-menu";

// Icons
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import SearchInput from "../SearchInput";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-20">
      <div className="w-full h-20 border-b-[0.1px] border-button flex justify-center items-center">
        <NavigationMenu className="max-width pt-4 pb-2 grid grid-cols-12">
          <NavigationMenuLink
            href="/"
            className="col-span-3 tracking-wide text-xl font-semibold"
          >
            Exclusive
          </NavigationMenuLink>

          <div className="col-span-5 gap-14 flex items-center">
            {navlinks.map((link) => (
              <NavigationMenuLink
                className="text-link"
                key={link.id}
                href={link.pathname}
              >
                {link.name}
              </NavigationMenuLink>
            ))}
          </div>

          <div className="col-span-4 flex justify-evenly items-center">
            <SearchInput />
            <div className="cursor-pointer flex items-center gap-6">
              <AiOutlineHeart color="black" size={25} />
              <AiOutlineShoppingCart size={25} />
            </div>
          </div>
        </NavigationMenu>
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
