/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CustomerServiceSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function CustomerServiceSvgrepoComSvgIcon(
  props: CustomerServiceSvgrepoComSvgIconProps
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
        strokeWidth={"1.91"}
        d={
          "m22.5 18.77-2.88 2.88c-2 2-8.18.46-12.95-4.32S.36 6.37 2.35 4.38L5.23 1.5l5 5-2.48 2.56c-1 1-.59 3 1.79 5.4s4.41 2.79 5.4 1.79l2.52-2.51ZM12.96 3.41h3.81v2.86h-2.86v2.87h3.82m4.77-6.68v3.81h-2.86V2.46m2.86 7.63V6.27"
        }
      ></path>
    </svg>
  );
}

export default CustomerServiceSvgrepoComSvgIcon;
/* prettier-ignore-end */
