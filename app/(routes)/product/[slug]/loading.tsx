import { ReloadIcon } from "@radix-ui/react-icons";

export default function ProductDetailLoading() {
  return (
    <div className="mx-auto max-width min-h-[800px] flex items-center justify-center">
      <div className="animate-spin">
        <ReloadIcon />
      </div>
    </div>
  );
}
