"use client";

import Link from "next/link";
import Image from "next/image";
import { EyeOpenIcon, HeartIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

import CategoryTitle from "@/components/layout/CategotyTitle";
import { useGetBestSellingProducts } from "@/lib/store/server/product/queries";
import FullStarIcon from "@/app/icons/FullStar";
import EmptyStarIcon from "@/app/icons/EmptyStar";
import HalfStarIcon from "@/app/icons/HalfStar";

function generateProductStar(count: number) {
  return [1, 2, 3, 4, 5].map((num) => {
    if (Math.ceil(count) >= num) {
      if (num >= Math.ceil(count) && num === count + 0.5) {
        return <HalfStarIcon />;
      } else {
        return <FullStarIcon />;
      }
    } else {
      return <EmptyStarIcon />;
    }
  });
}

export default function BestSellingProducts() {
  const { isLoading, data } = useGetBestSellingProducts({
    filters: {
      slug: {
        name: "variant",
        value: "best_selling",
      },
    },
  });

  return (
    <section className="my-2">
      <div>
        <CategoryTitle label="This Month" />
        <div className="flex items-center justify-between">
          <div className="text-2xl tracking-wide font-medium">
            Best Selling Products
          </div>
          <Link
            href="/"
            className="w-32 h-12 bg-button_two rounded-md flex items-center justify-center text-sm text-white tracking-wide"
          >
            View All
          </Link>
        </div>
      </div>
      <div className="grid mt-6 grid-cols-12 gap-4">
        {isLoading ? (
          <div>Loading</div>
        ) : (
          data?.map((item) => (
            <div
              key={item.id}
              className="col-span-3 cursor-pointer  flex flex-col"
            >
              {/* Image */}
              <div className="relative group bg-secondary rounded-sm flex items-center justify-center">
                <Image
                  width={160}
                  height={250}
                  src={"http://localhost:1337" + item.image}
                  alt="Product Image"
                  className="h-[250px] w-[160px] aspect-auto"
                />

                <div className="absolute flex flex-col gap-1.5 justify-center items-center right-2 top-2">
                  <div className="bg-primary cursor-pointer w-8 h-8 rounded-full flex items-center justify-center">
                    <HeartIcon />
                  </div>
                  <div className="bg-primary cursor-pointer w-8 h-8 rounded-full flex items-center justify-center">
                    <EyeOpenIcon />
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="text-sm rounded-b-md rounded-t-none transition-all group-hover:opacity-100 group-hover:right-0 bottom-0 absolute right-[-60px] opacity-0 w-full"
                >
                  Add To Cart
                </Button>
              </div>
              {/* End */}
              <div className="mt-3">
                <div className="text-sm">{item.name}</div>
                <div className="text-sm my-2">
                  <span className="text-button_two">${item.price}</span>
                  <span className="line-through ml-3 text-text_one">
                    ${item.dis_price}
                  </span>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {generateProductStar(item.rating)}
                </div>
                <div className="text-sm text-text_one">({item.voting})</div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
