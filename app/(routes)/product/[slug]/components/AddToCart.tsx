"use client";

import { useToast } from "@/components/ui/use-toast";
import useCart from "@/lib/hooks/useCart";
import { PlusIcon } from "@radix-ui/react-icons";

interface Props {
  productId: number;
}

export default function AddToCart({ productId }: Props) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  return (
    <button
      onClick={() => {
        addToCart(productId);
        toast({
          type: "background",
          color: "black",
          title: "Added to the cart.",
          description: "View your cart list.",
        });
      }}
      className="w-full relative h-12 rounded-full bg-button_two text-white flex items-center justify-center"
    >
      <PlusIcon className="absolute left-5" />
      <div>Add To Cart</div>
    </button>
  );
}
