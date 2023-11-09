import { create } from "zustand";
import { persist } from "zustand/middleware";

type Cart = {
  id: string;
  quantity: number;
};

type CartState = {
  carts: Cart[];
  addCart: (id: string) => void;
  removeCart: (id: string) => void;
  deleteCart: (id: string) => void;
};

export const cartStore = create<CartState>()(
  persist(
    (set) => ({
      carts: [],
      addCart: (id: string) =>
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
      removeCart: (id: string) =>
        set((state) => {
          const newCarts = state.carts.map((cart) =>
            cart.id === id ? { id: cart.id, quantity: cart.quantity - 1 } : cart
          );
          return {
            carts: newCarts,
          };
        }),
      deleteCart: (id: string) =>
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
