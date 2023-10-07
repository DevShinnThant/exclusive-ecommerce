import * as React from "react";
import { SVGProps } from "react";
const GoogleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#4285F4"
        d="M23.766 12.776c0-.815-.066-1.635-.207-2.438H12.24v4.621h6.482a5.554 5.554 0 0 1-2.399 3.647v2.998h3.867c2.27-2.09 3.576-5.177 3.576-8.828Z"
      />
      <path
        fill="#34A853"
        d="M12.24 24.5c3.237 0 5.966-1.062 7.955-2.896l-3.867-2.998c-1.076.731-2.465 1.146-4.083 1.146-3.131 0-5.786-2.112-6.738-4.952h-3.99v3.091a12.002 12.002 0 0 0 10.723 6.61Z"
      />
      <path
        fill="#FBBC04"
        d="M5.503 14.8a7.188 7.188 0 0 1 0-4.594V7.115H1.516a12.01 12.01 0 0 0 0 10.776l3.987-3.09Z"
      />
      <path
        fill="#EA4335"
        d="M12.24 5.25a6.52 6.52 0 0 1 4.603 1.799l3.427-3.426A11.533 11.533 0 0 0 12.24.5 11.998 11.998 0 0 0 1.517 7.115l3.986 3.09C6.45 7.363 9.109 5.25 12.24 5.25Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default GoogleIcon;
