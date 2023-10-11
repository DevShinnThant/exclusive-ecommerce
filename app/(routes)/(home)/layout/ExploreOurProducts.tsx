import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EyeOpenIcon,
  HeartIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

import CategoryTitle from "@/components/layout/CategotyTitle";

export default function ExploreOurProducts() {
  return (
    <section className="my-6">
      <div>
        <CategoryTitle label="Our Products" />
        <div className="flex items-center justify-between">
          <div className="text-2xl tracking-wide font-medium">
            Explore Our Products
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full">
              <ArrowLeftIcon />
            </div>
            <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full">
              <ArrowRightIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="grid mt-6 grid-cols-12 gap-4">
        <div className="col-span-3 cursor-pointer  flex flex-col">
          {/* Image */}
          <div className="relative group bg-secondary rounded-sm flex items-center justify-center">
            <Image
              width={100}
              height={250}
              src="/images/product-1.svg"
              alt="Product Image"
              className="h-[250px] w-[160px]"
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
            <div className="text-sm">The north cat</div>
            <div className="text-sm my-2">
              <span className="text-button_two">$260</span>
              <span className="line-through ml-3 text-text_one">$360</span>
            </div>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
            </div>
            <div className="text-sm text-text_one">(65)</div>
          </div>
          {/* End */}
        </div>

        <div className="col-span-3 cursor-pointer  flex flex-col">
          {/* Image */}
          <div className="relative group bg-secondary rounded-sm flex items-center justify-center">
            <Image
              width={100}
              height={250}
              src="/images/product-2.svg"
              alt="Product Image"
              className="h-[250px] w-[160px]"
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
            <div className="text-sm">The north cat</div>
            <div className="text-sm my-2">
              <span className="text-button_two">$260</span>
              <span className="line-through ml-3 text-text_one">$360</span>
            </div>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
            </div>
            <div className="text-sm text-text_one">(65)</div>
          </div>
          {/* End */}
        </div>

        <div className="col-span-3 cursor-pointer  flex flex-col">
          {/* Image */}
          <div className="relative group bg-secondary rounded-sm flex items-center justify-center">
            <Image
              width={100}
              height={250}
              src="/images/product-3.svg"
              alt="Product Image"
              className="h-[250px] w-[160px]"
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
            <div className="text-sm">The north cat</div>
            <div className="text-sm my-2">
              <span className="text-button_two">$260</span>
              <span className="line-through ml-3 text-text_one">$360</span>
            </div>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
            </div>
            <div className="text-sm text-text_one">(65)</div>
          </div>
          {/* End */}
        </div>

        <div className="col-span-3 cursor-pointer  flex flex-col">
          {/* Image */}
          <div className="relative group bg-secondary rounded-sm flex items-center justify-center">
            <Image
              width={100}
              height={250}
              src="/images/product-4.svg"
              alt="Product Image"
              className="h-[250px] w-[160px]"
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
            <div className="text-sm">The north cat</div>
            <div className="text-sm my-2">
              <span className="text-button_two">$260</span>
              <span className="line-through ml-3 text-text_one">$360</span>
            </div>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
            </div>
            <div className="text-sm text-text_one">(65)</div>
          </div>
          {/* End */}
        </div>

        <div className="col-span-3 cursor-pointer  flex flex-col">
          {/* Image */}
          <div className="relative group bg-secondary rounded-sm flex items-center justify-center">
            <Image
              width={100}
              height={250}
              src="/images/product-4.svg"
              alt="Product Image"
              className="h-[250px] w-[160px]"
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
            <div className="text-sm">The north cat</div>
            <div className="text-sm my-2">
              <span className="text-button_two">$260</span>
              <span className="line-through ml-3 text-text_one">$360</span>
            </div>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
            </div>
            <div className="text-sm text-text_one">(65)</div>
          </div>
          {/* End */}
        </div>

        <div className="col-span-3 cursor-pointer  flex flex-col">
          {/* Image */}
          <div className="relative group bg-secondary rounded-sm flex items-center justify-center">
            <Image
              width={100}
              height={250}
              src="/images/product-4.svg"
              alt="Product Image"
              className="h-[250px] w-[160px]"
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
            <div className="text-sm">The north cat</div>
            <div className="text-sm my-2">
              <span className="text-button_two">$260</span>
              <span className="line-through ml-3 text-text_one">$360</span>
            </div>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
            </div>
            <div className="text-sm text-text_one">(65)</div>
          </div>
          {/* End */}
        </div>

        <div className="col-span-3 cursor-pointer  flex flex-col">
          {/* Image */}
          <div className="relative group bg-secondary rounded-sm flex items-center justify-center">
            <Image
              width={100}
              height={250}
              src="/images/product-4.svg"
              alt="Product Image"
              className="h-[250px] w-[160px]"
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
            <div className="text-sm">The north cat</div>
            <div className="text-sm my-2">
              <span className="text-button_two">$260</span>
              <span className="line-through ml-3 text-text_one">$360</span>
            </div>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
            </div>
            <div className="text-sm text-text_one">(65)</div>
          </div>
          {/* End */}
        </div>

        <div className="col-span-3 cursor-pointer  flex flex-col">
          {/* Image */}
          <div className="relative group bg-secondary rounded-sm flex items-center justify-center">
            <Image
              width={100}
              height={250}
              src="/images/product-4.svg"
              alt="Product Image"
              className="h-[250px] w-[160px]"
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
            <div className="text-sm">The north cat</div>
            <div className="text-sm my-2">
              <span className="text-button_two">$260</span>
              <span className="line-through ml-3 text-text_one">$360</span>
            </div>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
              <Image width={18} height={18} src="/images/star.svg" alt="Star" />
            </div>
            <div className="text-sm text-text_one">(65)</div>
          </div>
          {/* End */}
        </div>
      </div>

      <div className="flex mt-10 justify-center">
        <Button className="text-xs border-none w-[200px] rounded-md px-10 m-auto py-5 bg-button_two">
          View All Products
        </Button>
      </div>
    </section>
  );
}
