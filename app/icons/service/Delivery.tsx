import * as React from "react";
import { SVGProps } from "react";
const DeliveryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={40}
    fill="none"
    {...props}
  >
    <g
      stroke="#FAFAFA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path d="M12.167 31.667a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667ZM28.833 31.667a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667Z" />
      <path d="M8.834 28.334H7.5a2 2 0 0 1-2-2v-4.667M3.833 8.333h16.334a2 2 0 0 1 2 2v18m-6.667 0h10m6.667 0H33.5a2 2 0 0 0 2-2v-8m0 0H22.167m13.333 0-4.417-7.362a2 2 0 0 0-1.715-.97h-7.201" />
      <path d="M8.5 28H7.167a2 2 0 0 1-2-2v-4.667M3.5 8h16.333a2 2 0 0 1 2 2v18M15.5 28h9.667m7.333 0h.667a2 2 0 0 0 2-2v-8m0 0H21.833m13.334 0-4.418-7.362a2 2 0 0 0-1.715-.971h-7.2M5.5 11.818h6.667M2.318 15.455h6.667M5.5 19.09h6.667" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5 0h40v40H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default DeliveryIcon;
