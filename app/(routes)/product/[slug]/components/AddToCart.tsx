"use client";

import useCart from "@/lib/hooks/useCart";
import { PlusIcon } from "@radix-ui/react-icons";

interface Props {
  productId: number;
}

export default function AddToCart({ productId }: Props) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(productId)}
      className="w-full relative h-12 rounded-full bg-button_two text-white flex items-center justify-center"
    >
      <PlusIcon className="absolute left-5" />
      <div>Add To Cart</div>
    </button>
  );
}
