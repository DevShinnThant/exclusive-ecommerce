import { BsCarFrontFill, BsHeadphones, BsShieldCheck } from "react-icons/bs";

export default function CustomerService() {
  return (
    <section className="flex mt-28 mb-10 items-center justify-center gap-20">
      <div className="flex flex-col gap-5 items-center">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-300">
          <div className="w-16 h-16 text-white text-3xl flex items-center justify-center rounded-full bg-button">
            <BsCarFrontFill />
          </div>
        </div>
        <div className="text-md tracking-wide font-medium">
          FREE AND FAST DELIVERY
        </div>
        <div className="text-sm tracking-wide">
          Free delivery for all orders over $140
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-300">
          <div className="w-16 h-16 text-white text-3xl flex items-center justify-center rounded-full bg-button">
            <BsHeadphones />
          </div>
        </div>
        <div className="text-md tracking-wide font-medium">
          24/7 CUSTOMER SERVICE
        </div>
        <div className="text-sm tracking-wide">
          Friendly 24/7 customer support
        </div>
      </div>

      <div className="flex flex-col gap-5 items-center">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-300">
          <div className="w-16 h-16 text-white text-3xl flex items-center justify-center rounded-full bg-button">
            <BsShieldCheck />
          </div>
        </div>
        <div className="text-md tracking-wide font-medium">
          MONEY BACK GUARANTEE
        </div>
        <div className="text-sm tracking-wide">
          We reurn money within 30 days
        </div>
      </div>
    </section>
  );
}
