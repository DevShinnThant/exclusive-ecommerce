"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useGetCategory } from "@/lib/store/server/category/queries";
import Link from "next/link";

export default function CategoryBar() {
  const { data, isLoading } = useGetCategory();

  return (
    <section>
      <div className="text-sm font-medium">Category</div>
      <div className="mt-3 gap-2 flex flex-col items-start">
        {isLoading ? (
          <div>
            {[...new Array(11)].map((_, index) => (
              <Skeleton
                key={index}
                className="w-28 mt-2 rounded-[3px] h-4 bg-gray-200"
              />
            ))}
          </div>
        ) : (
          data?.map((item) => (
            <Link
              className="text-sm cursor-pointer tracking-normal hover:border-b-[1px] hover:border-b-gray-600 transition-all"
              key={item.value}
              href={`/search?tag=category&name=${item.label}`}
            >
              {item.label}
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
