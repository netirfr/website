/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BlockProhibitedSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function BlockProhibitedSvgrepoComSvgIcon(
  props: BlockProhibitedSvgrepoComSvgIconProps
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

      <circle
        cx={"12"}
        cy={"12"}
        r={"10.5"}
        fill={"none"}
        stroke={"currentColor"}
        strokeMiterlimit={"10"}
        strokeWidth={"1.91"}
      ></circle>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeMiterlimit={"10"}
        strokeWidth={"1.91"}
        d={"M19.64 4.36 4.36 19.64"}
      ></path>
    </svg>
  );
}

export default BlockProhibitedSvgrepoComSvgIcon;
/* prettier-ignore-end */
