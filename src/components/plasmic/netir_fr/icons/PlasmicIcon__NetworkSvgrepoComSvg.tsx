/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NetworkSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NetworkSvgrepoComSvgIcon(props: NetworkSvgrepoComSvgIconProps) {
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
        r={"1.91"}
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
        d={"M9.14 16.77A2.86 2.86 0 0 1 12 13.91a2.86 2.86 0 0 1 2.86 2.86"}
      ></path>

      <circle
        cx={"20.59"}
        cy={"3.41"}
        r={"1.91"}
        fill={"none"}
        stroke={"currentColor"}
        strokeMiterlimit={"10"}
        strokeWidth={"1.91"}
      ></circle>

      <circle
        cx={"3.41"}
        cy={"20.59"}
        r={"1.91"}
        fill={"none"}
        stroke={"currentColor"}
        strokeMiterlimit={"10"}
        strokeWidth={"1.91"}
      ></circle>

      <circle
        cx={"20.11"}
        cy={"20.11"}
        r={"2.39"}
        fill={"none"}
        stroke={"currentColor"}
        strokeMiterlimit={"10"}
        strokeWidth={"1.91"}
      ></circle>

      <circle
        cx={"3.89"}
        cy={"3.89"}
        r={"2.39"}
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
        d={
          "m7.95 16.05-3.2 3.2m14.5-14.5-3.2 3.2M17.73 12a5.74 5.74 0 1 1-1.68-4 5.7 5.7 0 0 1 1.68 4Zm.69 6.42-2.37-2.37m-8.1-8.1L5.58 5.58"
        }
      ></path>
    </svg>
  );
}

export default NetworkSvgrepoComSvgIcon;
/* prettier-ignore-end */
