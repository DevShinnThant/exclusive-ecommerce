"use client";

import { Separator } from "@/components/ui/separator";
import { useWishlist } from "@/lib/hooks/useWishlist";
import { columns } from "./components/columns";
import { DataTable } from "@/components/Table";

export default function Wishlist() {
  const { wishlists } = useWishlist();

  return (
    <div className="fix-w-nav py-10">
      <div className="flex flex-col gap-4 justify-start">
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Home</div>
          <Separator orientation="vertical" />
          <div>Wishlist</div>
        </div>
        <div className="text-2xl font-semibold">My Wishlist</div>

        {/* Table */}
        <DataTable
          filterColumn="name"
          columns={columns}
          data={wishlists || []}
        />
      </div>
    </div>
  );
}
