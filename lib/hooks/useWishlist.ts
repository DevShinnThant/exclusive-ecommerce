import { wishlistStore } from "../store/client/wishlistStore";

export function useWishlist() {
  const { wishlists, addWishList, removeWishList } = wishlistStore((state) => ({
    wishlists: state.wishlists,
    addWishList: state.addWishList,
    removeWishList: state.removeWishList,
  }));

  return {
    wishlists,
    addWishList,
    removeWishList,
  };
}
