import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../server/product/types";

export interface Cart {
  id: number;
  name: string;
  image: string;
  price: number;
  variant: string;
  quantity: number;
}

type CartState = {
  carts: Cart[];
  addCart: (product: Cart) => void;
  removeCart: (id: number) => void;
  deleteCart: (id: number) => void;
};

export const cartStore = create<CartState>()(
  persist(
    (set) => ({
      carts: [],
      addCart: (product) =>
        set((state) => {
          console.log(product);

          const isExisted = state.carts.find((cart) => cart.id === product.id);
          let newCarts;
          if (isExisted) {
            newCarts = state.carts.map((cart) => {
              return cart.id === product.id
                ? { ...cart, quantity: cart.quantity + 1 }
                : cart;
            });
          } else {
            newCarts = [
              ...state.carts,
              {
                id: product.id,
                name: product.name,
                quantity: 1,
                image: product.image,
                variant: product.variant,
                price: product.price,
              },
            ];
          }
          return {
            carts: newCarts,
          };
        }),
      removeCart: (id) =>
        set((state) => {
          const isRemove =
            state.carts.find((cart) => cart.id === id)?.quantity === 1;
          let newCarts = [];

          if (isRemove) {
            newCarts = state.carts.filter((cart) => cart.id !== id);
          } else {
            newCarts = state.carts.map((cart) =>
              cart.id === id ? { ...cart, quantity: cart.quantity - 1 } : cart
            );
          }
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
