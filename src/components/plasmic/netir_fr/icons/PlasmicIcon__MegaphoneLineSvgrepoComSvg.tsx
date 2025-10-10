/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MegaphoneLineSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function MegaphoneLineSvgrepoComSvgIcon(
  props: MegaphoneLineSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={
          "M13 15V7m0 8 5.504 3.145A1 1 0 0 0 20 17.277V4.723a1 1 0 0 0-1.496-.868L13 7m0 8h-3m3-8H7a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4v0m0 0v4.5A1.5 1.5 0 0 0 8.5 21v0a1.5 1.5 0 0 0 1.5-1.5V15m-3 0h3"
        }
      ></path>
    </svg>
  );
}

export default MegaphoneLineSvgrepoComSvgIcon;
/* prettier-ignore-end */
