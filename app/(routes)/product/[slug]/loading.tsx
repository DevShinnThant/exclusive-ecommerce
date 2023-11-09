import { ReloadIcon } from "@radix-ui/react-icons";

export default function ProductDetailLoading() {
  return (
    <div className="mx-auto max-width h-full">
      <div className="animate-spin">
        <ReloadIcon />
      </div>
    </div>
  );
}
