import { PlusIcon } from "@radix-ui/react-icons";

interface Props {
  productId: number;
}

export default function AddToCart({ productId }: Props) {
  return (
    <button className="w-full relative h-12 rounded-full bg-button_two text-white flex items-center justify-center">
      <PlusIcon className="absolute left-5" />
      <div>Add To Cart</div>
    </button>
  );
}
