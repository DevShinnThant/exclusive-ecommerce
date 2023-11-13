"use client";

import CartIcon from "@/app/icons/navbar/Cart";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import useCart from "@/lib/hooks/useCart";
import { Button } from "../ui/button";

export default function CartSlider() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button aria-label="Cart" variant="link">
          <CartIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>My Cart</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
