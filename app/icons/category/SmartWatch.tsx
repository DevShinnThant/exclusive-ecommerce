import * as React from "react";
import { SVGProps } from "react";
const SmartWatchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <g stroke="#000" strokeLinecap="round" strokeWidth={2} clipPath="url(#a)">
      <path
        strokeLinejoin="round"
        d="M35 14H21a7 7 0 0 0-7 7v14a7 7 0 0 0 7 7h14a7 7 0 0 0 7-7V21a7 7 0 0 0-7-7ZM21 42v7h14v-7M21 14V7h14v7"
      />
      <path d="M24 23v11M28 28v6M32 26v8" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h56v56H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SmartWatchIcon;
