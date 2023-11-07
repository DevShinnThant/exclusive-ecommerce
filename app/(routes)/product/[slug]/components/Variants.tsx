import axios from "@/lib/api/axios";
import { generateProductQueryString } from "@/lib/utils";

async function fetchProductInfo(name: string) {
  //   const queryString = generateProductQueryString(
  //     {
  //       filters: {
  //         slug: {
  //           name: "product",
  //           value: name,
  //         },
  //         deep: {
  //           columnName: "name",
  //         },
  //       },
  //     },
  //     true
  //   );

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/product-size-colors?filters[product][name][$eq]=Champion Tee&populate[size_colors][populate][colors][populate]=*`
  );

  //   console.log(queryString);

  console.log(
    response.data.data[0].attributes.size_colors.data[0].attributes.colors
      .data[0].attributes
  );

  return response.data.data[0];
}

export default async function Variant({
  productName,
}: {
  productName: string;
}) {
  const data = await fetchProductInfo(productName);
  return <div>Variant</div>;
}
