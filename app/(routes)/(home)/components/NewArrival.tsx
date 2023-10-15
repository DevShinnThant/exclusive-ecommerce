import Image from "next/image";

import PlaystationImage from "@/public/images/playstation.png";
import WomanImage from "@/public/images/attractive-woman.png";
import SpeakerImage from "@/public/images/speakers.png";
import PerfumeImage from "@/public/images/perfumes.png";
import Link from "next/link";

export default function NewArrival() {
  return (
    <section className="grid grid-rows-2 grid-cols-6 grid-flow-col gap-10  h-[518px]">
      <div className="col-span-3 rounded-md relative row-span-2 bg-button">
        <div className="flex justify-center p-10">
          <Image
            loading="lazy"
            className="w-[380px] absolute bottom-0"
            src={PlaystationImage}
            alt="Playstaion Category"
          />
          <div className="absolute bottom-0 my-8 left-0 px-8 w-[300px]">
            <div className="text-lg font-semibold text-primary tracking-wide">
              PlayStation 5
            </div>
            <div className="my-2 text-primary font-light text-xs">
              Black and White version of the PS5 coming out on sale.
            </div>
            <Link
              href="/search/controller"
              className="text-primary text-sm underline underline-offset-4 px-0"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-3 row-span-1 rounded-md relative bg-button">
        <div className="flex justify-center p-10">
          <Image
            loading="lazy"
            className="w-[380px] h-[238px] absolute bottom-0 left-40"
            src={WomanImage}
            alt="Woman Accessory Category"
          />
          <div className="absolute bottom-0 my-8 left-0 px-8 w-[300px]">
            <div className="text-lg font-semibold text-primary tracking-wide">
              Women's Collections
            </div>
            <div className="my-2 text-primary font-light text-xs">
              Featured woman collections that give you another vibe.
            </div>
            <Link
              href="/search/women_collection"
              className="text-primary text-sm underline underline-offset-4 px-0"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-3 grid grid-cols-6 row-span-1 gap-6">
        <div className="col-span-3 relative rounded-md bg-button">
          <div className="flex justify-center p-10">
            <Image
              loading="lazy"
              className="w-32 absolute bottom-10"
              src={SpeakerImage}
              alt="Speaker Category"
            />
            <div className="absolute bottom-0 mb-4 left-0 px-5">
              <div className="text-lg font-semibold text-primary tracking-wide">
                Speakers
              </div>
              <div className="my-2 text-primary font-light text-xs">
                Amazon wireless speakers
              </div>
              <Link
                href="/search/speaker"
                className="text-primary text-sm underline underline-offset-4 px-0"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-3 relative rounded-md bg-button">
          <div className="flex justify-center p-10">
            <Image
              priority
              className="w-32 absolute bottom-10"
              src={PerfumeImage}
              alt="Speaker Category"
            />
            <div className="absolute bottom-0 mb-4 left-0 px-5">
              <div className="text-lg font-semibold text-primary tracking-wide">
                Perfume
              </div>
              <div className="my-2 text-primary font-light text-xs">
                GUCCI INTENSE OUD EDP
              </div>
              <Link
                href="/search/perfume"
                className="text-primary text-sm underline underline-offset-4 px-0"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
