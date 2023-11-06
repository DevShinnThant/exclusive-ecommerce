"use client";

// Icons
import CameraIcon from "@/app/icons/category/Camera";
import ComputerIcon from "@/app/icons/category/Computer";
import ControllerIcon from "@/app/icons/category/Controller";
import HeadphoneIcon from "@/app/icons/category/Headphone";
import PhoneIcon from "@/app/icons/category/Phone";
import SmartWatchIcon from "@/app/icons/category/SmartWatch";

import CategoryTitle from "@/components/layout/CategotyTitle";

// Hooks
import { useRouter } from "next/navigation";

export default function BrowseByCategory() {
  const router = useRouter();

  return (
    <section className="my-20">
      <CategoryTitle label="Categories" />
      <div className="text-2xl tracking-wide font-medium">
        Browse By Category
      </div>
      <div className="grid mt-14 grid-cols-12 gap-4 place-content-center">
        {categories.map(({ id, name, icon: Icon, value }) => (
          <div
            onClick={() => router.push(`/search/${value}`)}
            key={id}
            className="transition-all hover:bg-button_two hover:text-white border cursor-pointer col-span-2 h-44 rounded-md flex flex-col gap-4 justify-center items-center border-gray-300"
          >
            {Icon}
            <div className="text-sm select-none">{name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const categories: {
  id: number;
  name: string;
  value: string;
  icon: JSX.Element;
}[] = [
  {
    id: 0,
    name: "Phones",
    value: "phone",
    icon: <PhoneIcon />,
  },
  {
    id: 1,
    name: "Computers",
    value: "computer",
    icon: <ComputerIcon />,
  },
  {
    id: 2,
    name: "SmartWatches",
    value: "smart_watch",
    icon: <SmartWatchIcon />,
  },
  {
    id: 3,
    name: "Cameras",
    value: "camera",
    icon: <CameraIcon />,
  },
  {
    id: 4,
    name: "HeadPhones",
    value: "headPhone",
    icon: <HeadphoneIcon />,
  },
  {
    id: 5,
    name: "Controllers",
    value: "controller",
    icon: <ControllerIcon />,
  },
];
