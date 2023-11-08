import axios from "@/lib/api/axios";
import { generateProductQueryString } from "@/lib/utils";
import Gallery from "./components/Gallery";
import ProductInfo from "./components/Info";
import RelatedProducts from "./components/RelatedProducts";

async function getProduct(name: string) {
  const queryString = generateProductQueryString({
    filters: {
      slug: {
        name: "name",
        value: name,
      },
      property: "$contains",
    },
  });

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/${queryString}`
  );

  return response.data.data[0];
}

export default async function ProductDetail({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const product = await getProduct(slug);
  const category = product.attributes.category.data.attributes.Name;
  const productName = product.attributes.name;

  return (
    <div className="flex flex-col gap-8 mx-auto overflow-scroll py-6 max-w-screen-2xl w-full  px-4">
      <div className="flex p-10 items-center gap-6 bg-black rounded-md ">
        <div className="w-3/4">
          <Gallery images={product.attributes.images} />
        </div>
        <div className="flex-1">
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts categoryName={category} productName={productName} />
    </div>
  );
}
