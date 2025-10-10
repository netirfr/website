/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhotoCameraSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhotoCameraSvgrepoComSvgIcon(
  props: PhotoCameraSvgrepoComSvgIconProps
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
          "M3 9a2 2 0 0 1 2-2h1.5a2 2 0 0 0 1.6-.8l1.05-1.4a2 2 0 0 1 1.6-.8h2.5a2 2 0 0 1 1.6.8l1.05 1.4a2 2 0 0 0 1.6.8H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        }
      ></path>

      <circle
        cx={"12"}
        cy={"13"}
        r={"4"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
      ></circle>
    </svg>
  );
}

export default PhotoCameraSvgrepoComSvgIcon;
/* prettier-ignore-end */
