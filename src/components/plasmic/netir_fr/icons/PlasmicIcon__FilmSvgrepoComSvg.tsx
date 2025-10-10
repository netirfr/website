/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FilmSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FilmSvgrepoComSvgIcon(props: FilmSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      stroke={"currentColor"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      strokeWidth={"2"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        width={"20"}
        height={"20"}
        x={"2"}
        y={"2"}
        rx={"2.18"}
        ry={"2.18"}
      ></rect>

      <path d={"M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5m10 0h5M17 7h5"}></path>
    </svg>
  );
}

export default FilmSvgrepoComSvgIcon;
/* prettier-ignore-end */
