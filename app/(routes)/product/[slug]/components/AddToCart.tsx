"use client";

import { useToast } from "@/components/ui/use-toast";
import { useCart } from "@/lib/hooks/useCart";

import { ProductResponse } from "@/lib/store/server/product/types";

import { PlusIcon } from "@radix-ui/react-icons";

interface Props {
  product: ProductResponse;
}

export default function AddToCart({ product }: Props) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const productData = product.attributes;

  return (
    <button
      onClick={() => {
        addToCart({
          id: product.id,
          name: productData.name,
          image: productData.images.data[0].attributes.url,
          price: productData.dis_price,
          variant: productData.variant,
          quantity: 0,
        });
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
