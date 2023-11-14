import useCart from "@/lib/hooks/useCart";
import { Cart } from "@/lib/store/client/cartStore";

import { Product } from "@/lib/store/server/product/types";
import { Cross2Icon, MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import Image from "next/image";

interface Props {
  cart: Cart;
}

const SERVER = process.env.NEXT_PUBLIC_DATABASE_URL;

export default function CartItem({ cart }: Props) {
  const { deleteFromCart, addToCart, removeFromCart, carts } = useCart();

  return (
    <div className="w-full flex items-center h-20 justify-center gap-4 my-4 border-b p-2">
      <div className="flex-1 w-12 h-full relative bg-gray-300 rounded-md">
        <Image
          fill
          className="object-contain p-2"
          src={SERVER + cart.image}
          alt={cart.name}
        />
        <div
          onClick={() => {
            deleteFromCart(cart.id);
          }}
          className="absolute -right-2 -top-2 cursor-pointer w-4 h-4 bg-gray-600 rounded-full  flex justify-center items-center"
        >
          <Cross2Icon className="text-white" />
        </div>
      </div>
      <div className="w-[120px] h-full flex flex-col items-start">
        <div className="text-sm">{cart.name}</div>
        <div className="text-sm text-gray-500">{cart.variant}</div>
      </div>
      <div className="flex-1 h-full flex flex-col gap-2 items-start">
        <div className="text-sm">$ {cart.price} USD</div>
        <div className="w-full px-3 py-1 flex justify-between items-center rounded-full border border-gray-300">
          <div
            className="cursor-pointer"
            onClick={() => removeFromCart(cart.id)}
          >
            <MinusIcon />
          </div>
          <div className="text-xs font-medium select-none">{cart.quantity}</div>
          <div onClick={() => addToCart(cart)} className="cursor-pointer">
            <PlusIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
