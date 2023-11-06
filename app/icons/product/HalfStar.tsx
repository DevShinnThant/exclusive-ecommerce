import * as React from "react";
import { SVGProps } from "react";
const HalfStarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#FFAD33"
      d="M10 1.833a1.317 1.317 0 0 0-1.195.744L6.953 6.33l-4.143.602a1.333 1.333 0 0 0-.74 2.275l3 2.921-.709 4.127a1.333 1.333 0 0 0 1.934 1.407L10 15.713V1.833Z"
    />
    <path
      fill="#000"
      d="M10 1.836c.25-.002.5.164.5.164s.587.208.695.442l1.852 3.914 4.143.628c.247.037.478.145.669.312.19.168.332.387.41.634.076.247.085.511.026.764-.06.252-.186.481-.365.662l-3 3.047.709 4.304c.042.256.014.519-.08.759-.093.24-.249.449-.45.601a1.288 1.288 0 0 1-1.404.107L10 16.142V1.836Z"
      opacity={0.25}
    />
  </svg>
);
export default HalfStarIcon;
