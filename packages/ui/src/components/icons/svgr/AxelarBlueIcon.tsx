import type { SVGProps } from "react";

const SvgAxelarBlueIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 141.596 140.816"
    {...props}
  >
    <defs>
      <linearGradient
        id="axelar-blue-icon_svg__a"
        x1={0}
        y1={70.408}
        x2={141.596}
        y2={70.408}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#009dff" />
        <stop offset={1} stopColor="#00b2fd" />
      </linearGradient>
      <filter
        id="axelar-blue-icon_svg__b"
        data-name="drop-shadow-1"
        filterUnits="userSpaceOnUse"
      >
        <feOffset />
        <feGaussianBlur result="f" stdDeviation={1.491} />
        <feFlood floodColor="#000" floodOpacity={0.13} />
        <feComposite in2="f" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <path
      d="m79.026 59.29 43.223-42.984L105.851 0 70.828 34.83 35.805 0 19.408 16.306 62.63 59.29c2.264 2.251 5.231 3.377 8.198 3.377s5.934-1.125 8.198-3.377Zm62.57 45.919-35.023-34.83 35.023-34.831-16.397-16.306-43.221 42.984a11.487 11.487 0 0 0 0 16.306l43.221 42.984 16.397-16.306Zm-70.828.777 35.023 34.83 16.396-16.306-43.221-42.984c-4.529-4.503-11.868-4.503-16.397 0L19.348 124.51l16.397 16.306 35.023-34.83Zm-11.15-27.395c2.175-2.163 3.396-5.095 3.396-8.153s-1.221-5.991-3.396-8.153L16.397 19.301 0 35.608l35.023 34.83L0 105.269l16.397 16.306 43.222-42.984Z"
      fill="url(#axelar-blue-icon_svg__a)"
      filter="url(#axelar-blue-icon_svg__b)"
      data-name="Layer 1"
    />
  </svg>
);
export default SvgAxelarBlueIcon;