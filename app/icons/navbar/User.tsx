import * as React from "react"
import { SVGProps } from "react"
const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <rect width={32} height={32} fill="#DB4444" rx={16} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 23v-1.667c0-.884-.309-1.732-.86-2.357-.55-.625-1.295-.976-2.073-.976h-5.134c-.778 0-1.524.351-2.074.976-.55.625-.859 1.473-.859 2.357V23M16 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </svg>
)
export default UserIcon
