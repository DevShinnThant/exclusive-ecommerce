import EnhancedYourMusicExperienceImage from "@/public/images/home-cover.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function EnhancedYourMusicExperience() {
  return (
    <div className="relative">
      <Image
        loading="eager"
        priority
        className="w-full my-20"
        src={EnhancedYourMusicExperienceImage}
        alt="Advertising Image"
      />
      <Button className="absolute left-12 bottom-14 w-40 h-12 bg-button_one">
        Buy Now!
      </Button>
    </div>
  );
}
