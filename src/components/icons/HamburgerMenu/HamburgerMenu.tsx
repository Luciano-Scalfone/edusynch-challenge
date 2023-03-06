import React from "react";
import { SVGIconsSize } from "../../../interfaces/IconsTypes";

const HamburgerMenu = ({ width, height }: SVGIconsSize): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="#8C8A97"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.25 12H16.75"
        stroke="#8C8A97"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.25 15.25H16.75"
        stroke="#8C8A97"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.25 8.75H16.75"
        stroke="#8C8A97"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default HamburgerMenu;
