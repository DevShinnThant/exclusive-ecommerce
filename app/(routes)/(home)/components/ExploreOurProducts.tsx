"use client";

import CategoryTitle from "@/components/layout/CategotyTitle";
import { useGetProducts } from "@/lib/store/server/product/queries";
import ProductSkeleton from "@/components/skeletons/ProductSkeleton";
import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export default function ExploreOurProducts() {
  const { isLoading, data } = useGetProducts({
    filters: {
      search: {
        slug: "variant",
        catcher: "$eq",
        value: "normal",
      },
    },
    pagination: {
      limit: 4,
    },
  });

  return (
    <section className="my-6">
      <div>
        <CategoryTitle label="Our Products" />
        <div className="flex items-center justify-between">
          <div className="text-2xl tracking-wide font-medium">
            Explore Our Products
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full">
              <ArrowLeftIcon />
            </div>
            <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full">
              <ArrowRightIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="grid mt-6 grid-cols-12 gap-4">
        {isLoading
          ? [...new Array(8)].map((_, index) => <ProductSkeleton key={index} />)
          : data?.map((item) => <ProductCard key={item.name} product={item} />)}
      </div>

      <div className="flex mt-10 justify-center">
        <Link
          href="/search/all"
          className="text-xs text-white border-none w-[180px] rounded-md px-8 m-auto py-3 bg-button_two"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}
