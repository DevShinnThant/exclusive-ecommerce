"use client";

import CartIcon from "@/app/icons/navbar/Cart";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { useCartStore } from "@/lib/hooks/useCart";
import useMounted from "@/lib/hooks/useMounted";

export default function CartSlider() {
  const [opened, setOpened] = useState<boolean>(false);

  const { carts, total } = useCartStore();

  const isMounted = useMounted();

  return (
    <Sheet open={opened} onOpenChange={setOpened}>
      <SheetTrigger asChild>
        <Button
          className="relative"
          variant="link"
          onClick={() => setOpened(true)}
        >
          <CartIcon />
          {carts.length > 0 && isMounted && (
            <div className="absolute top-0 right-2 w-4 h-4 rounded-full bg-button_two flex items-center justify-center text-white text-[10px]">
              {carts.length}
            </div>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>My Cart</SheetTitle>
        </SheetHeader>
        <div className="relative w-full h-full overflow-y-scroll flex flex-col justify-start items-center">
          {carts.length ? (
            <div className="w-full h-[calc(100%_-_255px)] overflow-scroll ">
              {carts.map((cart) => (
                <CartItem key={cart.id} cart={cart} />
              ))}
            </div>
          ) : (
            <div className="absolute h-full flex flex-col gap-4 justify-center items-center">
              <CartIcon />
              <div className="font-medium">Your cart is empty</div>
            </div>
          )}
          {carts.length > 0 && (
            <div className="absolute pb-8 bottom-0 w-full grid grid-cols-12 gap-4">
              <div className="col-span-12 flex items-center justify-between border-b border-gray-300 py-1">
                <div className="text-sm text-gray-500">Taxes</div>
                <div>$0.00USD</div>
              </div>

              <div className="col-span-12 flex items-center justify-between border-b border-gray-300 py-1">
                <div className="text-sm text-gray-500">Shipping</div>
                <div className="text-sm text-gray-500">
                  Calculated at checkout
                </div>
              </div>

              <div className="col-span-12 flex items-center justify-between py-1">
                <div className="text-sm text-gray-500">Total</div>
                <div>${total}USD</div>
              </div>

              <Button className="col-span-12 mt-4 rounded-full h-11 bg-button_two cursor-pointer">
                Proceed to Checkout
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
