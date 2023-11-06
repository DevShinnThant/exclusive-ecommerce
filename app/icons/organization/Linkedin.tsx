import * as React from "react";
import { SVGProps } from "react";
const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M11.5 9.05c.917-.937 2.111-1.55 3.5-1.55a5.5 5.5 0 0 1 5.5 5.5v7.5h-2V13a3.5 3.5 0 1 0-7 0v7.5h-2V8h2v1.05ZM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-1 2h2v12.5h-2V8Z"
    />
  </svg>
);
export default LinkedinIcon;
