"use client";

import { ProductImageResponse } from "@/lib/store/server/product/types";
import { cn, createURL } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const Server = process.env.NEXT_PUBLIC_DATABASE_URL;

interface Props {
  images: ProductImageResponse;
}

export default function Gallery({ images }: Props) {
  const imageData = images.data;

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const imageSearchParam = searchParams.get("image");
  const imageIndex = imageSearchParam ? parseInt(imageSearchParam) : 0;

  //   Next Image
  const nextImageSearchParams = new URLSearchParams(searchParams.toString());
  const nextImageIndex =
    imageIndex === imageData.length - 1 ? 0 : imageIndex + 1;
  nextImageSearchParams.set("image", nextImageIndex.toString());
  const nextImageUrl = createURL(nextImageSearchParams, pathname);

  //   Previous Image
  const previousImageSearchParams = new URLSearchParams(
    searchParams.toString()
  );
  const previousImageIndex =
    imageIndex === 0 ? imageData.length - 1 : imageIndex - 1;
  previousImageSearchParams.set("image", previousImageIndex.toString());
  const previousImageUrl = createURL(previousImageSearchParams, pathname);

  return (
    <div className="w-full flex flex-col gap-20 items-center">
      <div className="relative w-[240px] h-[300px]">
        {imageData[imageIndex] && (
          <Image
            priority
            fill
            src={Server + imageData[imageIndex].attributes.url}
            className="object-contain"
            alt="product-image"
          />
        )}

        <div className="w-full absolute bottom-[-6%]">
          <div className="w-36 h-10 mx-auto bg-gray-600 rounded-full">
            <div className="w-full h-full flex justify-center items-center">
              <Link
                className="flex-1 flex justify-center items-center"
                href={previousImageUrl}
              >
                <ArrowLeftIcon color="white" />
              </Link>
              <div className="w-[1px] h-6 bg-gray-300" />
              <Link
                className="flex-1 flex justify-center items-center"
                href={nextImageUrl}
              >
                <ArrowRightIcon color="white" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {imageData?.map((image: any, index: number) => {
          const imageUrl = image.attributes.url;
          const imageSearchParams = new URLSearchParams(
            searchParams.toString()
          );
          imageSearchParams.set("image", index.toString());

          const isActive = imageIndex === index;

          return (
            <Link
              key={index}
              href={createURL(imageSearchParams, pathname)}
              className={cn(
                `group w-24 h-32 flex items-center justify-center outline outline-1 outline-gray-400 rounded-md hover:outline-button_two transition-all cursor-pointer`,
                isActive && "outline-button_two"
              )}
            >
              <Image
                width={70}
                height={70}
                src={Server + imageUrl}
                alt="product-image"
                className="transition object-contain duration-300 ease-in-out group-hover:scale-105"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
