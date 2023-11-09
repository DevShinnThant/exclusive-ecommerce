import { cartStore } from "../store/client/cartStore";

export default function useCart() {
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
