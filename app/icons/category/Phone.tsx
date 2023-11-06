import * as React from "react";
import { SVGProps } from "react";
const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg className="w-10 h-10" viewBox="0 0 20 20" {...props}>
    <path d="M14.911 1.295H5.09c-.737 0-1.339.603-1.339 1.339v14.733c0 .736.603 1.338 1.339 1.338h9.821c.737 0 1.339-.602 1.339-1.338V2.634c0-.736-.602-1.339-1.339-1.339m.446 16.072c0 .24-.205.445-.446.445H5.09a.453.453 0 0 1-.446-.445v-.893h10.714v.893zm0-1.787H4.644V4.42h10.714v11.16zm0-12.053H4.644v-.893c0-.241.205-.446.446-.446h9.821c.241 0 .446.206.446.446v.893z" />
  </svg>
);
export default PhoneIcon;
