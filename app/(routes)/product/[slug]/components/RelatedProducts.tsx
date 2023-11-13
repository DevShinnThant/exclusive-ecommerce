import axios from "@/lib/api/axios";
import { ProductSelector } from "@/lib/store/server/product/selectors";
import { generateProductQueryString } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Server = process.env.NEXT_PUBLIC_DATABASE_URL;

async function fetchRelatedProducts({ categoryName, productName }: Props) {
  const queryString = generateProductQueryString({
    initialFilter: {
      slug: "name",
      catcher: "$ne",
      value: productName,
    },
    filters: {
      category: {
        slug: "Name",
        catcher: "$eq",
        value: categoryName,
      },
    },
  });

  console.log(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/products?populate=*&${queryString}`
  );

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/products?populate=*&${queryString}`
  );
  const data = ProductSelector(response.data.data);

  return data;
}

interface Props {
  categoryName: string;
  productName: string;
}

export default async function RelatedProducts(props: Props) {
  const products = await fetchRelatedProducts(props);

  return (
    <>
      <div className="text-2xl text-black font-semibold">Related Products</div>
      <div className="flex w-full gap-4 overflow-x-auto pt-8">
        {products.map((product) => (
          <Link
            href={`/product/${product.name}`}
            key={product.id}
            className="aspect-square group border-[2px] border-gray-700 hover:border-button_two cursor-pointer bg-black rounded-lg relative w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <div className="p-10">
              <Image
                fill
                src={Server + product.image}
                className="w-full h-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                alt={product.name}
              />
            </div>

            <div className="absolute bottom-3 backdrop-blur-sm z-10 bg-white/70 mt-6 ml-4 w-[80%] h-11 border border-gray-400 rounded-full flex px-1.5 justify-between items-center">
              <div className="text-black font-medium text-xs pl-2">
                {product.name}
              </div>
              <div className="w-[40%] text-[10px] text-white font-medium tracking-wide h-8 bg-button_two rounded-full flex justify-center items-center">
                ${product.dis_price} USD
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
