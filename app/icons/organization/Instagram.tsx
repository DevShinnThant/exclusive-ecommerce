import * as React from "react";
import { SVGProps } from "react";
const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z"
    />
    <path
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
    <path fill="#fff" d="M17.5 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  </svg>
);
export default InstagramIcon;
