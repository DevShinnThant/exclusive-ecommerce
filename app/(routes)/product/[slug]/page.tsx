import axios from "@/lib/api/axios";
import { generateProductQueryString } from "@/lib/utils";

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
  console.log(response.data.data);

  // id?
  // size ?
  // color ?
  // description ?
  // price ?
  // name ?
  // images
}

export default async function ProductDetail({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const product = await getProduct(slug);

  return (
    <div className="mx-auto max-w-screen-2xl w-full bg-gray-500 px-4">
      <div className="flex items-center gap-6">
        <div className="flex-1"></div>
        <div className="flex-1">Description</div>
      </div>
    </div>
  );
}
