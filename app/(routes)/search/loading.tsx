import { Skeleton } from "@/components/ui/skeleton";
import CategoryBar from "./components/CategoryBar";
import SortBar from "./components/SortBar";

export default function SearchProductLoading() {
  return (
    <main className="w-full bg-neutral-50 pt-10 pb-[220px]">
      <div className="w-5/6 m-auto flex gap-[80px]">
        <div className="w-[100px]">
          <CategoryBar />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-12 gap-8">
            <Skeleton className="col-span-12 w-64 h-5 bg-gray-300 rounded-md" />

            {[...new Array(3)].map((_, index) => (
              <div key={index} className="col-span-4">
                <div>
                  <Skeleton className="w-[240px] h-[320px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[114px]">
          <SortBar />
        </div>
      </div>
    </main>
  );
}
