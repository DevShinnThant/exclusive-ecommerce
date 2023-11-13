import { useMemo } from "react";
import useCart from "./useCart";

export default function useCartStore() {
  const { carts } = useCart();

  const cartIds = useMemo(() => carts.map((cart) => cart.id), [carts]);

  


}
