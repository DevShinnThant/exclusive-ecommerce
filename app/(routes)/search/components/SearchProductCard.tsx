import { Product } from "@/lib/store/server/product/types";
import Image from "next/image";

const Server = process.env.NEXT_PUBLIC_DATABASE_URL;

export default function SearchProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-black cursor-pointer transition-opacity animate-fade-in pt-8 pb-5 rounded-md">
      <Image
        width={140}
        height={200}
        src={Server + product.image}
        alt={product.name}
        className="object-contain m-auto w-[140px] h-[200px]"
      />
      <div className="mt-6 ml-4 w-[80%] h-11 border-[0.01px] border-gray-500 rounded-full flex px-1.5 justify-between items-center">
        <div className="text-white text-xs pl-2">{product.name}</div>
        <div className="w-[40%] text-[10px] text-white font-medium tracking-wide h-8 bg-button_two rounded-full flex justify-center items-center">
          ${product.dis_price} USD
        </div>
      </div>
    </div>
  );
}
