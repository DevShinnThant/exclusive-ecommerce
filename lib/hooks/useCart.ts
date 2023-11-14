import { useMemo } from "react";
import { Cart, cartStore } from "../store/client/cartStore";

export function useCart() {
  const { carts, addToCart, removeFromCart, deleteFromCart } = cartStore(
    (state) => ({
      carts: state.carts,
      addToCart: state.addCart,
      removeFromCart: state.removeCart,
      deleteFromCart: state.deleteCart,
    })
  );

  return {
    carts,
    addToCart,
    removeFromCart,
    deleteFromCart,
  };
}

export function useCartStore(): {
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
