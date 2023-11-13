import { useMemo } from "react";
import useCart from "./useCart";
import { useGetProducts } from "../store/server/product/queries";
import { Product } from "../store/server/product/types";

export default function useCartStore(): {
  isLoading: boolean;
  carts: Product[];
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
    carts: data || [],
    total,
  };
}
