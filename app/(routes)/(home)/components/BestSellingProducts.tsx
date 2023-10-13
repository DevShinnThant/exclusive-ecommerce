"use client";

import Link from "next/link";

import CategoryTitle from "@/components/layout/CategotyTitle";
import { useGetProducts } from "@/lib/store/server/product/queries";
import ProductCard from "@/components/ProductCard";
import ProductSkeleton from "@/components/skeletons/ProductSkeleton";

export default function BestSellingProducts() {
  const { isLoading, data } = useGetProducts({
    filters: {
      slug: {
        name: "variant",
        value: "best_selling",
      },
    },
  });

  return (
    <section className="my-2">
      <div>
        <CategoryTitle label="This Month" />
        <div className="flex items-center justify-between">
          <div className="text-2xl tracking-wide font-medium">
            Best Selling Products
          </div>
          <Link
            href="/"
            className="w-32 h-12 bg-button_two rounded-md flex items-center justify-center text-sm text-white tracking-wide"
          >
            View All
          </Link>
        </div>
      </div>
      <div className="grid mt-6 grid-cols-12 gap-4">
        {isLoading
          ? [...new Array(4)].map((_, index) => <ProductSkeleton key={index} />)
          : data?.map((item) => <ProductCard key={item.name} product={item} />)}
      </div>
    </section>
  );
}
