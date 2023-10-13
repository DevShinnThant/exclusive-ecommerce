import Image from "next/image";
import Link from "next/link";

import CoverImage from "@/public/images/about-cover.png";

import { BsGift, BsShop } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
import { FaSackDollar } from "react-icons/fa6";
import React from "react";
import CustomerService from "../(home)/layout/CustomerService";

export default function About() {
  return (
    <div className="w-full py-10 max-width">
      <div className="flex items-center gap-3">
        <Link className="text-gray-500 text-sm tracking-wide" href="/">
          Home
        </Link>
        <div className="select-none">/</div>
        <Link href="/about" className="text-sm tracking-wide">
          About
        </Link>
      </div>
      <div className="flex my-10 items-center justify-between gap-14">
        <div className="w-[600px] flex flex-col gap-5 items-start">
          <div className="text-3xl tracking-wide font-semibold">Our Story</div>
          <div className="text-sm text-gray-600 tracking-wide leading-6">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </div>
          <div className="text-sm text-gray-600 tracking-wide">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </div>
        </div>

        <Image
          src={CoverImage}
          loading="lazy"
          className="w-[380px] h-[280px] object-contain"
          alt="About Us Cover"
        />
      </div>

      <CustomerService />

      <div className="flex mt-24 items-center gap-4">
        {items.map(({ id, count, label, icon: Icon }) => (
          <div
            key={id}
            className="border group hover:bg-button_two transition-all cursor-pointer rounded-md flex-1 flex flex-col justify-center items-center gap-5 p-10 border-gray-500"
          >
            <div className="w-16 group-hover:bg-gray-200 h-16 rounded-full bg-gray-300 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full text-xl group-hover:bg-white group-hover:text-black bg-black flex text-white items-center justify-center">
                {Icon}
              </div>
            </div>
            <div className="text-xl group-hover:text-white font-semibold tracking-wide">
              {count}k
            </div>
            <div className="text-sm group-hover:text-white text-gray-500">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const items: {
  id: number;
  count: number;
  label: string;
  icon: JSX.Element;
}[] = [
  {
    id: 0,
    count: 10.5,
    label: "Sellers active our site",
    icon: <BsShop />,
  },
  {
    id: 1,
    count: 33,
    label: "Monthly Product Sale",
    icon: <FiDollarSign />,
  },
  {
    id: 2,
    count: 45.5,
    label: "Customer active in our site",
    icon: <BsGift />,
  },
  {
    id: 3,
    count: 25,
    label: "Annual gross sale in our site",
    icon: <FaSackDollar />,
  },
];
