import * as React from "react";
import { SVGProps } from "react";
const CartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.25 20.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM18.75 20.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM2.25 3.75h3L7.5 16.5h12"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.5 12.5h11.692a.375.375 0 0 0 .369-.301l1.35-6.75A.376.376 0 0 0 20.541 5H6"
    />
  </svg>
);
export default CartIcon;
