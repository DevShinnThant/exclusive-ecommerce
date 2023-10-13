import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/store/server/product/types";

interface Props {
  products: Product[] | undefined;
}

export default function ProductByCategory({ products }: Props) {
  return (
    <div className="w-full grid min-h-[500px] grid-cols-12 gap-4">
      {products?.length ? (
        products?.map((item) => <ProductCard key={item.id} product={item} />)
      ) : (
        <div className="col-span-12 m-auto text-md font-normal tracking-wide">
          No Product Found! &#128529;
        </div>
      )}
    </div>
  );
}
