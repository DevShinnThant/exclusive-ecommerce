import { useMemo } from "react";
import useCart from "./useCart";
import { useGetProducts } from "../store/server/product/queries";
import { Product } from "../store/server/product/types";
import { Cart } from "../store/client/cartStore";

export default function useCartStore(): {
  carts: Cart[];
  total: number;
} {
  const { carts } = useCart();

  const total = useMemo(() => {
    return (
      carts.reduce((acc, item) => {
        const cartQty =
          carts.find((cart) => cart.id === item.id)?.quantity || 0;

        return acc + item.price * cartQty;
      }, 0) || 0
    );
  }, [carts]);

  return {
    carts: carts || [],
    total,
  };
}
