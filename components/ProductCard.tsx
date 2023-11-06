import { Product } from "@/lib/store/server/product/types";
import Image from "next/image";
import HalfStarIcon from "@/app/icons/product/HalfStar";
import FullStarIcon from "@/app/icons/product/FullStar";
import EmptyStarIcon from "@/app/icons/product/EmptyStar";
import Link from "next/link";
import { EyeOpenIcon, HeartIcon } from "@radix-ui/react-icons";

const Server = process.env.NEXT_PUBLIC_DATABASE_URL;

function generateProductStar(count: number) {
  return [1, 2, 3, 4, 5].map((num) => {
    if (Math.ceil(count) >= num) {
      if (num >= Math.ceil(count) && num === count + 0.5) {
        return (
          <div key={num}>
            <HalfStarIcon />
          </div>
        );
      } else {
        return (
          <div key={num}>
            <FullStarIcon />
          </div>
        );
      }
    } else {
      return (
        <div key={num}>
          <EmptyStarIcon />
        </div>
      );
    }
  });
}

export default function ProductCard({
  product: { name, price, dis_price, rating, voting, image },
}: {
  product: Product;
}) {
  return (
    <Link
      href={`/product/${name}`}
      className="col-span-3 cursor-pointer flex flex-col"
    >
      {/* Image */}
      <div className="relative group bg-secondary rounded-sm flex items-center justify-center transition-opacity animate-fade-in">
        {image && (
          <Image
            width={160}
            height={250}
            src={Server + image}
            alt="Product Image"
            className="h-[250px] w-[160px] aspect-auto"
          />
        )}

        <div className="absolute flex flex-col gap-1.5 justify-center items-center right-2 top-2">
          <div className="bg-primary cursor-pointer w-8 h-8 rounded-full flex items-center justify-center">
            <HeartIcon />
          </div>
          <div className="bg-primary cursor-pointer w-8 h-8 rounded-full flex items-center justify-center">
            <EyeOpenIcon />
          </div>
        </div>
      </div>
      {/* End */}
      <div className="mt-3">
        <div className="text-sm">{name}</div>
        <div className="text-sm flex gap-2 items-center my-2">
          {dis_price && <span className="text-button_two">${dis_price}</span>}
          {price && (
            <span className="text-text_one line-through ">${price}</span>
          )}
        </div>
      </div>

      {/* Stars */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          {generateProductStar(rating)}
        </div>
        <div className="text-sm text-text_one">({voting})</div>
      </div>
    </Link>
  );
}
