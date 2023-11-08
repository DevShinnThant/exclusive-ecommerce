import { ProductResponse } from "@/lib/store/server/product/types";
import Variant from "./Variants";

interface Props {
  product: ProductResponse;
}

export default function ProductInfo({ product }: Props) {
  const productData = product.attributes;

  return (
    <div className="flex flex-col gap-4">
      <div className="text-white text-3xl">{productData.name}</div>
      <div className="text-white flex items-center justify-center text-sm w-24 rounded-full h-10 bg-button_two">
        ${productData.dis_price} USD
      </div>
      <div className="w-full h-[0.01px] border border-gray-500" />
      <Variant product={product} />
    </div>
  );
}
