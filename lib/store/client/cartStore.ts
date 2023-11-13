import { create } from "zustand";
import { persist } from "zustand/middleware";

type Cart = {
  id: number;
  quantity: number;
};

type CartState = {
  carts: Cart[];
  addCart: (id: number) => void;
  removeCart: (id: number) => void;
  deleteCart: (id: number) => void;
};

export const cartStore = create<CartState>()(
  persist(
    (set) => ({
      carts: [],
      addCart: (id: number) =>
        set((state) => {
          const isExisted = state.carts.find((cart) => cart.id === id);
          let newCarts;
          if (isExisted) {
            newCarts = state.carts.map((cart) => {
              return cart.id === id
                ? { id: cart.id, quantity: cart.quantity + 1 }
                : cart;
            });
          } else {
            newCarts = [...state.carts, { id, quantity: 1 }];
          }
          return {
            carts: newCarts,
          };
        }),
      removeCart: (id: number) =>
        set((state) => {
          const newCarts = state.carts.map((cart) =>
            cart.id === id ? { id: cart.id, quantity: cart.quantity - 1 } : cart
          );
          return {
            carts: newCarts,
          };
        }),
      deleteCart: (id: number) =>
        set((state) => {
          const newCarts = state.carts.filter((cart) => cart.id !== id);
          return {
            carts: newCarts,
          };
        }),
    }),
    {
      name: "cart-store",
    }
  )
);
