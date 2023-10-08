import Image from "next/image";
import { Input } from "../ui/input";

import QRImage from "@/public/images/QRImage.svg";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="w-full h-[380px] bg-button">
      <div className="h-full pt-16 pb-10 grid grid-cols-10 gap-16 px-32">
        <div className="col-span-2 text-white flex flex-col items-start">
          <div className=" font-medium tracking-wider">Exclusive</div>
          <div className="my-4 text-sm">Subscribe</div>
          <div className="text-sm">Get 10% off your first order</div>
          <Input placeholder="Enter your email" className="text-white mt-5" />
        </div>
        <div className="col-span-2 text-white flex flex-col items-start">
          <div className=" font-medium tracking-wider">Support</div>
          <div className="my-4 text-sm">No (22) North Okkalapa,Yangon</div>
          <div className="text-sm">shinthantequi@gmail.com</div>
          <div className="text-sm mt-3">+959 9761653208</div>
        </div>
        <div className="col-span-2 text-white flex flex-col items-start">
          <div className=" font-medium tracking-wider">Account</div>
          <div className="my-4 text-sm">My Account</div>
          <div className="text-sm">Login / Register</div>
          <div className="text-sm mt-3">Cart</div>
          <div className="text-sm mt-3">Wishlist</div>
          <div className="text-sm mt-3">Shop</div>
        </div>
        <div className="col-span-2 text-white flex flex-col items-start">
          <div className=" font-medium tracking-wider">Quick Link</div>
          <div className="my-4 text-sm">Privicy Policy</div>
          <div className="text-sm">Terms Of Use</div>
          <div className="text-sm mt-3">FAQ</div>
          <div className="text-sm mt-3">Contact</div>
        </div>
        <div className="col-span-2 text-white flex flex-col items-start">
          <div className="font-medium tracking-wider">Download</div>
          <div className="my-4 text-xs">Save $3 with App New User Only</div>
          <Image width={200} height={50} src={QRImage} alt="Website QR" />
          <div className="mt-4 flex items-center gap-6">
            <FiFacebook size={20} />
            <FiTwitter size={20} />
            <FiInstagram size={20} />
            <FiLinkedin size={20} />
          </div>
        </div>
        <div className="col-span-10">
          <div className="text-gray-500 w-fit text-xs m-auto">
            © Copyright Rimel 2022. All right reserved
          </div>
        </div>
      </div>
    </div>
  );
}
