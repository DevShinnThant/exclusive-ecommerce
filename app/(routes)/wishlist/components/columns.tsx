"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { WishCart } from "@/lib/store/client/wishlistStore";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

const SERVER = process.env.NEXT_PUBLIC_DATABASE_URL;

export const columns: ColumnDef<WishCart>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Product",
    cell: ({ row }) => {
      const { name, image } = row.original;
      return (
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 relative">
            <Image
              className="object-contain rounded-md border p-1"
              fill
              src={SERVER + image}
              alt={name}
            />
          </div>

          <div className="text-sm">{name}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "variant",
    header: () => <div className="ml-4">Category</div>,
    cell: ({ row }) => {
      const data = row.original.variant;
      return (
        <div className="w-28 h-6 rounded-full bg-gray-300 text-black flex items-center justify-center text-xs">
          {data}
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const originalPrice = row.original.price.toLocaleString();
      const discountPrice = row.original.discountPrice.toLocaleString();
      return (
        <div className="flex items-center gap-4">
          <span> ${discountPrice} USD </span>
          <span className="relative z-10 overflow-hidden before:absolute before:inset-x-0 before:inset-y-[8px] before:-z-10 before:h-[0.01px] before:border before:border-black">
            {originalPrice}
          </span>
        </div>
      );
    },
  },

  {
    id: "action",
  },
];
