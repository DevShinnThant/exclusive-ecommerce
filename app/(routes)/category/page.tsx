"use client";

import { useGetProducts } from "@/lib/store/server/product/queries";
import { SelectCategory } from "./layout/SelectCategory";
import { useSearchParams } from "next/navigation";
import ProductByCategory from "./layout/ProductByCategory";

export default function Category() {
  const params = useSearchParams();
  const queue = params.get("q");

  const { data, isLoading } = useGetProducts({
    filters: {
      slug: {
        name: "category",
        value: queue || "",
      },
      deep: {
        columnName: "name",
      },
    },
  });

  return (
    <main className="w-full max-width my-10">
      <div className="flex justify-between items-center">
        <SelectCategory />
        <div className="flex items-center gap-2 text-sm">
          <div className="font-medium">{data?.length}</div>
          <div>Products</div>
        </div>
      </div>
      <ProductByCategory products={data} isLoading={isLoading} />
    </main>
  );
}
