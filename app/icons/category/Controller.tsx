import * as React from "react";
import { SVGProps } from "react";
const ControllerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#a)"
    >
      <path
        strokeWidth={2}
        d="M46.666 14H9.334a4.667 4.667 0 0 0-4.667 4.667v18.666A4.667 4.667 0 0 0 9.334 42h37.334a4.667 4.667 0 0 0 4.666-4.667V18.667A4.667 4.667 0 0 0 46.667 14ZM14 28h9.333m-4.666-4.667v9.334"
      />
      <path strokeWidth={3} d="M35 25.667v.024M42 30.333v.024" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h56v56H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ControllerIcon;
