import CategoryTitle from "@/components/layout/CategotyTitle";

// Icons
import { BsPhone } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoWatchOutline, IoGameControllerOutline } from "react-icons/io5";
import { FiCamera } from "react-icons/fi";
import { PiHeadphones } from "react-icons/pi";

export default function BrowseByCategory() {
  return (
    <section className="my-20">
      <CategoryTitle label="Categories" />
      <div className="text-2xl tracking-wide font-medium">
        Browse By Category
      </div>
      <div className="grid mt-14 grid-cols-12 gap-4 place-content-center">
        {categories.map(({ id, name, icon: Icon }) => (
          <div
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
  icon: JSX.Element;
}[] = [
  {
    id: 0,
    name: "Phones",
    icon: <BsPhone size={30} />,
  },
  {
    id: 1,
    name: "Computers",
    icon: <HiOutlineComputerDesktop size={30} />,
  },
  {
    id: 2,
    name: "SmartWatches",
    icon: <IoWatchOutline size={30} />,
  },
  {
    id: 3,
    name: "Cameras",
    icon: <FiCamera size={30} />,
  },
  {
    id: 4,
    name: "HeadPhones",
    icon: <PiHeadphones size={30} />,
  },
  {
    id: 5,
    name: "Controllers",
    icon: <IoGameControllerOutline size={30} />,
  },
];
