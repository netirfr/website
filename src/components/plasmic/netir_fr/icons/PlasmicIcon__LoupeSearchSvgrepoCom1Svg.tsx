/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LoupeSearchSvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LoupeSearchSvgrepoCom1SvgIcon(
  props: LoupeSearchSvgrepoCom1SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 512.001 512.001"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M283.097 0C156.88 0 54.194 102.686 54.194 228.904c0 37.27 8.959 72.485 24.827 103.613l-58.247 58.247c-27.699 27.697-27.699 72.766 0 100.463C34.622 505.077 52.814 512 71.005 512s36.385-6.924 50.232-20.773l58.246-58.247c31.131 15.869 66.346 24.827 103.614 24.827C409.314 457.807 512 355.121 512 228.904S409.315 0 283.097 0M87.751 457.739c-9.235 9.235-24.256 9.232-33.489 0-9.234-9.233-9.234-24.256 0-33.488l51.18-51.178a231 231 0 0 0 33.488 33.488zm195.346-47.291c-100.103 0-181.544-81.441-181.544-181.544S182.994 47.36 283.097 47.36s181.544 81.44 181.544 181.544-81.44 181.544-181.544 181.544"
        }
      ></path>
    </svg>
  );
}

export default LoupeSearchSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
