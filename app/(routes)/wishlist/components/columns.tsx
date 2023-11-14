"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { WishCart } from "@/lib/store/client/wishlistStore";
import { ColumnDef } from "@tanstack/react-table";

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
  },
  {
    accessorKey: "variant",
    header: "Category",
  },
  {
    accessorKey: "price",
    header: "Original Price",
  },
  {
    accessorKey: "discountPrice",
    header: "Discount Price",
  },
  {
    id: "action",
  },
];
