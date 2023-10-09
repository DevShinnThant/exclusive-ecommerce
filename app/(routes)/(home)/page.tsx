import Image from "next/image";

import HomeCover from "@/public/images/home-cover.svg";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full">
      <div className="relative">
        <Image
          className="w-full"
          loading="eager"
          priority
          src={HomeCover}
          alt="Home Cover"
        />
        <Button className="absolute w-[171px] h-[56px] left-16 bottom-5 bg-button_one cursor-pointer">
          Buy Now!
        </Button>
      </div>
      <div className="max-width w-full">
        <div className="w-[100px] flex items-center h-[50px]">
          <div className="w-[20px] h-full bg-button_two"></div>
          <div className="text-button_two w-fit">Today's</div>
        </div>
      </div>
    </div>
  );
}
