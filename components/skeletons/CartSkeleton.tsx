import { Skeleton } from "../ui/skeleton";

export default function CartSkeleton() {
  return (
    <div className="flex items-center h-20 justify-center gap-4 my-4 border-b p-2">
      <Skeleton className="flex-1 w-12 h-full relative bg-gray-300 rounded-md" />

      <div className="w-[120px] h-full flex flex-col items-start">
        <Skeleton className="" />
        <Skeleton className="" />
      </div>
      <div className="flex-1 h-full flex flex-col gap-2 items-start">
        <Skeleton className="text-sm" />
        <Skeleton className="w-full px-3 py-1 rounded-full" />
      </div>
    </div>
  );
}
