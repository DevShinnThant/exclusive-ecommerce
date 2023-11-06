import axios from "@/lib/api/axios";
import { generateProductQueryString } from "@/lib/utils";
import Gallery from "./components/Gallery";

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
  return response.data.data[0].attributes;
}

export default async function ProductDetail({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const product = await getProduct(slug);
  console.log(product);

  return (
    <div className="mx-auto py-6 max-w-screen-2xl w-full bg-gray-300 px-4">
      <div className="flex p-10 items-center gap-6 bg-black rounded-md outline outline-gray-400">
        <div className="flex-1 ">
          <Gallery images={product.images} />
        </div>
        <div className="flex-1">Description</div>
      </div>
    </div>
  );
}
