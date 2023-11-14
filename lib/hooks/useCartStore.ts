import { useMemo } from "react";
import useCart from "./useCart";
import { useGetProducts } from "../store/server/product/queries";
import { Product } from "../store/server/product/types";

export interface Cart {
  id: number;
  name: string;
  dis_price: number;
  variant: string;
  qty: number;
  image: string;
}

export default function useCartStore(): {
  isLoading: boolean;
  carts: Cart[];
  total: number;
} {
  const { carts } = useCart();

  const cartIds = useMemo(() => carts.map((cart) => cart.id), [carts]);

  const { data, isLoading } = useGetProducts({
    filters: {
      ids: {
        catcher: "$in",
        value: cartIds,
      },
    },
  });

  const qtyMap = new Map<number, number>();

  carts.forEach((cart) => qtyMap.set(cart.id, cart.quantity));

  const cartData = data?.map((product) => ({
    id: product.id,
    name: product.name,
    dis_price: product.dis_price,
    variant: product.variant,
    qty: qtyMap.get(product.id) || 1,
    image: product.image,
  }));

  const total = useMemo(() => {
    return (
      data?.reduce((acc, item) => {
        const cartQty =
          carts.find((cart) => cart.id === item.id)?.quantity || 0;

        return acc + item.dis_price * cartQty;
      }, 0) || 0
    );
  }, [cartIds, data]);

  if (isLoading) {
    return {
      isLoading,
      carts: [],
      total: 0,
    };
  }

  return {
    isLoading,
    carts: cartData || [],
    total,
  };
}
