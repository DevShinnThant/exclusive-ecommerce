import ProductCard from "@/components/ProductCard";
import ProductSkeleton from "@/components/skeletons/ProductSkeleton";
import { Product } from "@/lib/store/server/product/types";

interface Props {
  isLoading: boolean;
  products: Product[] | undefined;
}

export default function ProductByCategory({ isLoading, products }: Props) {
  return (
    <div className="grid grid-cols-12 gap-4">
      {isLoading
        ? [...new Array(4)].map((_) => <ProductSkeleton key={_} />)
        : products?.map((item) => <ProductCard key={item.id} product={item} />)}
    </div>
  );
}
