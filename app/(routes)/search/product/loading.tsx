import { ReloadIcon } from "@radix-ui/react-icons";

export default function SearchProductLoading() {
  return (
    <main className="w-full h-[650px] flex items-center justify-center bg-neutral-50 pt-10 pb-[220px]">
      <ReloadIcon className="w-4 h-4 animate-spin" />
    </main>
  );
}
