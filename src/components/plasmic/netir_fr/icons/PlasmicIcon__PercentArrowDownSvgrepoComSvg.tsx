/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PercentArrowDownSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function PercentArrowDownSvgrepoComSvgIcon(
  props: PercentArrowDownSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={"m3 13.5 9 9 9-9h-3v-12H6v12z"}
      ></path>

      <circle cx={"10"} cy={"6.5"} r={"1"} fill={"currentColor"}></circle>

      <circle cx={"14"} cy={"10.5"} r={"1"} fill={"currentColor"}></circle>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={"m14 5.5-4 6"}
      ></path>
    </svg>
  );
}

export default PercentArrowDownSvgrepoComSvgIcon;
/* prettier-ignore-end */
