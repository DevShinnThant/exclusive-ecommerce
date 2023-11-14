import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Cart } from "./cartStore";

interface WishlistState {
  wishlists: Cart[];
  addWishList: (wishCart: Cart) => void;
  removeWishList: (wishCart: Cart) => void;
}

export const wishlistStore = create<WishlistState>()(
  persist(
    (set) => ({
      wishlists: [],
      addWishList: (wishCart) =>
        set((state) => {
          return {
            wishlists: [...state.wishlists, wishCart],
          };
        }),
      removeWishList: (wishCart) =>
        set((state) => {
          const filteredWishlist = state.wishlists.filter(
            (cart) => cart.id !== wishCart.id
          );
          return {
            wishlists: filteredWishlist,
          };
        }),
    }),
    {
      name: "wishlist-store",
    }
  )
);
