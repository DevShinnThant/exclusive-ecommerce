"use client";

import { ProductResponse } from "@/lib/store/server/product/types";

import { sizes, colors } from "@/lib/mocks/product-variant";
import { cn, createURL } from "@/lib/utils";
import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Variant({ product }: { product: ProductResponse }) {
  const searchParams = useSearchParams();

  const pathname = usePathname();

  const router = useRouter();

  const availableColors = useMemo(
    () =>
      product.attributes.colors.data.map(
        (colorData) => colorData.attributes.name
      ),
    [product]
  );
  const availableSizes = useMemo(
    () =>
      product.attributes.sizes.data.map((sizeData) => sizeData.attributes.name),
    [product]
  );

  return (
    <div className="flex flex-col gap-6">
      {availableColors.length ? (
        <div className="flex flex-col gap-4">
          <div className="text-white">COLOR</div>
          <div className="flex items-center gap-4">
            {colors.map((color) => {
              const isAvailable = availableColors.includes(color);
              const isActive = searchParams.get("color") === color;

              // route params
              const url = new URLSearchParams(searchParams.toString());
              url.set("color", color);
              const routeParams = createURL(url, pathname);

              return (
                <button
                  key={color}
                  aria-disabled={!isAvailable}
                  disabled={!isAvailable}
                  title={`${color}${!isAvailable ? " (Out of Stock)" : ""}`}
                  onClick={() => {
                    if (isAvailable) {
                      router.replace(routeParams, { scroll: false });
                    }
                  }}
                  className={cn(
                    "border w-16 h-8 rounded-full flex items-center justify-center text-white text-sm ",
                    {
                      "ring-2 cursor-default ring-button_two": isActive,
                      "ring-1 cursor-pointer ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-button_two":
                        isAvailable && !isActive,
                      "relative z-10 cursor-not-allowed overflow-hidden before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform":
                        !isAvailable,
                    }
                  )}
                >
                  {color}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
      {availableSizes.length ? (
        <div className="flex flex-col gap-4">
          <div className="text-white">SIZE</div>
          <div className="flex items-center gap-4">
            {sizes.map((size) => {
              const isAvailable = availableSizes.includes(size);
              const isActive = searchParams.get("size") === size;

              // route params
              const url = new URLSearchParams(searchParams.toString());
              url.set("size", size);
              const routeParams = createURL(url, pathname);

              return (
                <button
                  key={size}
                  aria-disabled={!isAvailable}
                  disabled={!isAvailable}
                  title={`${size}${!isAvailable ? " (Out of Stock)" : ""}`}
                  onClick={() => {
                    if (isAvailable) {
                      router.replace(routeParams, { scroll: false });
                    }
                  }}
                  className={cn(
                    "border w-16 h-8 rounded-full flex items-center justify-center text-white text-sm ",
                    {
                      "ring-2 cursor-default ring-button_two": isActive,
                      "ring-1 cursor-pointer ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-button_two":
                        isAvailable && !isActive,
                      "relative z-10 cursor-not-allowed overflow-hidden before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform":
                        !isAvailable,
                    }
                  )}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      <div className="text-gray-400 my-2 text-xs tracking-wide">
        {product.attributes.desciption}.
      </div>
    </div>
  );
}
