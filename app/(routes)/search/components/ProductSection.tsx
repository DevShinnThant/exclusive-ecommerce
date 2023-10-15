import { Product } from "@/lib/store/server/product/types";
import SearchProductCard from "./SearchProductCard";

interface Props {
  products: Product[];
  searchQuery: string;
}

export default function ProductSection({ products, searchQuery }: Props) {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-12">
        Showing {products.length} result for{" "}
        <span className="font-medium">"{searchQuery}"</span>{" "}
      </div>
      {products.map((product) => (
        <div className="col-span-4">
          <SearchProductCard key={product.id} product={product} />
        </div>
      ))}
    </div>
  );
}
