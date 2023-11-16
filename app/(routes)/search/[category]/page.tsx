import { SelectCategory } from "./components/SelectCategory";
import ProductByCategory from "./components/ProductByCategory";
import axios from "@/lib/api/axios";
import { ProductSelector } from "@/lib/store/server/product/selectors";
import { generateProductQueryString } from "@/lib/utils";

async function fetchProducts(name: string) {
  const queryString =
    name === "all"
      ? ""
      : generateProductQueryString({
          filters: {
            category: {
              slug: "Name",
              catcher: "$eq",
              value: name,
            },
          },
        });

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/products?populate=*&${queryString}`
  );
  const data = ProductSelector(response.data.data);

  return data;
}

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  const products = await fetchProducts(params.category);

  return (
    <main className="w-full max-width py-10">
      <div className="flex mb-8 justify-between items-center">
        <SelectCategory />
        <div className="flex items-center gap-2 text-sm">
          <div className="font-medium">{products?.length}</div>
          <div>Product{products.length > 1 ? "s" : ""}</div>
        </div>
      </div>
      <ProductByCategory products={products} />
    </main>
  );
}
