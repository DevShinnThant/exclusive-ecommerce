import useCart from "@/lib/hooks/useCart";
import { Product } from "@/lib/store/server/product/types";
import { Cross2Icon, MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import Image from "next/image";

interface Props {
  cart: Product;
}

const SERVER = process.env.NEXT_PUBLIC_DATABASE_URL;

export default function CartItem({ cart }: Props) {
  const { deleteFromCart } = useCart();

  return (
    <div className="w-full flex items-center h-20 justify-center gap-4 my-4 border-b p-2">
      <div className="flex-1 w-12 h-full relative bg-gray-300 rounded-md">
        <Image
          fill
          className="object-contain p-2"
          src={SERVER + cart.image}
          alt={cart.name}
        />
        <div
          onClick={() => {
            deleteFromCart(cart.id);
          }}
          className="absolute -right-2 -top-2 cursor-pointer w-4 h-4 bg-gray-600 rounded-full  flex justify-center items-center"
        >
          <Cross2Icon className="text-white" />
        </div>
      </div>
      <div className="w-[120px] h-full flex flex-col items-start">
        <div className="text-sm">{cart.name}</div>
        <div className="text-sm text-gray-500">{cart.variant}</div>
      </div>
      <div className="flex-1 h-full flex flex-col gap-2 items-start">
        <div className="text-sm">$ {cart.dis_price} USD</div>
        <div className="w-full px-3 py-1 flex justify-between items-center rounded-full border border-gray-300">
          <MinusIcon className="cursor-pointer" />
          <div className="text-xs font-medium">1</div>
          <PlusIcon className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
