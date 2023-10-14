export default function SortBar() {
  return (
    <>
      <div className="text-sm font-medium">Sort By</div>
      <div className="flex mt-4 flex-col gap-2 items-start justify-start">
        <div className="text-xs tracking-wide hover:border-b hover:border-black transition-all cursor-pointer">
          Latest arrivals
        </div>
        <div className="text-xs tracking-wide hover:border-b hover:border-black transition-all cursor-pointer">
          Price: Low to High
        </div>
        <div className="text-xs tracking-wide hover:border-b hover:border-black transition-all cursor-pointer">
          Price: Hight to Low
        </div>
      </div>
    </>
  );
}
