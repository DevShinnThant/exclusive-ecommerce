import { create } from "zustand";
import { persist } from "zustand/middleware";
export interface WishCart {
  id: number;
  name: string;
  image: string;
  variant: string;
  price: number;
  discountPrice: number;
}

interface WishlistState {
  wishlists: WishCart[];
  addWishList: (wishCart: WishCart) => void;
  removeWishList: (id: number) => void;
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
      removeWishList: (id) =>
        set((state) => {
          const filteredWishlist = state.wishlists.filter(
            (cart) => cart.id !== id
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
