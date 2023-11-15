"use client";

import WishlistIcon from "@/app/icons/navbar/Wishlist";
import useMounted from "@/lib/hooks/useMounted";
import { useWishlist } from "@/lib/hooks/useWishlist";
import Link from "next/link";

export default function WishListBox() {
  const isMounted = useMounted();
  const { wishlists } = useWishlist();
  return (
    <Link href="/wishlist" className="relative">
      <WishlistIcon />
      {wishlists.length > 0 && isMounted && (
        <div className="absolute top-0 -right-1 w-4 h-4 rounded-full bg-button_two flex items-center justify-center text-white text-[10px]">
          {wishlists.length}
        </div>
      )}
    </Link>
  );
}
