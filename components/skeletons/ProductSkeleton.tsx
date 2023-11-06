import EmptyStarIcon from "@/app/icons/product/EmptyStar";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductSkeleton() {
  return (
    <div className="col-span-3  cursor-pointer flex flex-col">
      <div className="relative group bg-secondary rounded-sm flex items-center justify-center">
        <Skeleton className="h-[250px] w-full aspect-auto" />

        <div className="absolute flex flex-col gap-1.5 justify-center items-center right-2 top-2">
          <Skeleton className="bg-gray-300 cursor-pointer w-8 h-8 rounded-full flex items-center justify-center" />
          <Skeleton className="bg-gray-300 cursor-pointer w-8 h-8 rounded-full flex items-center justify-center" />
        </div>
      </div>

      <div className="mt-3">
        <Skeleton className="h-4 w-24" />
        <div className="my-3 flex gap-4 items-center">
          <Skeleton className="text-gray-500 w-10 h-4" />
          <Skeleton className="text-gray-500 w-10 h-4" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          {[...new Array(5)].map((_, index) => (
            <div key={index}>
              <EmptyStarIcon />
            </div>
          ))}
        </div>
        <Skeleton className="w-4 h-4 rounded-full bg-gray-300" />
      </div>
    </div>
  );
}
