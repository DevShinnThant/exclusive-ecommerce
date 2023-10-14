import ProductSkeleton from "@/components/skeletons/ProductSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { SelectCategory } from "./components/SelectCategory";

export default function Loading() {
  return (
    <main className="w-full max-width py-10">
      <div className="flex mb-8 justify-between items-center">
        <SelectCategory disabled={true} />
        <div className="flex items-center gap-2 text-sm">
          <Skeleton className="w-5 h-5 bg-gray-300 rounded-full" />
          <div>Product</div>
        </div>
      </div>
      <div className="grid mt-6 grid-cols-12 gap-4">
        {[...new Array(8)].map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    </main>
  );
}
