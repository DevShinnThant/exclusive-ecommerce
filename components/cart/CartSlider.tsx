"use client";

import CartIcon from "@/app/icons/navbar/Cart";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { Button } from "../ui/button";
import useCartStore from "@/lib/hooks/useCartStore";
import { useState } from "react";
import CartItem from "./CartItem";
import CartSkeleton from "../skeletons/CartSkeleton";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function CartSlider() {
  const [opened, setOpened] = useState<boolean>(false);

  const { isLoading, carts, total } = useCartStore();

  return (
    <>
      <Button onClick={() => setOpened(true)} aria-label="Cart" variant="link">
        <CartIcon />
      </Button>

      <Sheet open={opened} onOpenChange={setOpened}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>My Cart</SheetTitle>
          </SheetHeader>
          <div className="relative w-full min-h-full overflow-y-scroll flex flex-col justify-start items-center">
            {carts.length ? (
              carts?.map((cart) => <CartItem key={cart.id} cart={cart} />)
            ) : isLoading ? (
              <div className="absolute h-full flex justify-center items-center">
                <div className="animate-spin">
                  <ReloadIcon />
                </div>
              </div>
            ) : (
              <div className="absolute h-full flex flex-col gap-4 justify-center items-center">
                <CartIcon />
                <div className="font-medium">Your cart is empty</div>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
