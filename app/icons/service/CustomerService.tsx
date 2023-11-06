import * as React from "react";
import { SVGProps } from "react";
const CustomerServiceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path d="M13.333 25a3.333 3.333 0 0 0-6.667 0v3.333a3.333 3.333 0 0 0 6.667 0V25ZM33.333 25a3.333 3.333 0 0 0-6.666 0v3.333a3.333 3.333 0 0 0 6.666 0V25Z" />
      <path d="M6.667 25v-5a13.334 13.334 0 0 1 26.666 0v5M30 31.666c0 1.327-1.054 2.598-2.929 3.536-1.875.938-4.419 1.465-7.071 1.465" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default CustomerServiceIcon;
