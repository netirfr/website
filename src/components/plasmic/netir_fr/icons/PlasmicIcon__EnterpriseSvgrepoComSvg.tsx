/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EnterpriseSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EnterpriseSvgrepoComSvgIcon(
  props: EnterpriseSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      version={"1.1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"none"} fillRule={"evenodd"} stroke={"none"} strokeWidth={"1"}>
        <path
          fill={"#FFF"}
          fillOpacity={".01"}
          fillRule={"nonzero"}
          d={"M0 0h24v24H0z"}
        ></path>

        <path
          stroke={"#212121"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          strokeWidth={"1.5"}
          d={"M2 21h20"}
        ></path>

        <rect
          height={"10"}
          rx={"1"}
          stroke={"#212121"}
          strokeLinejoin={"round"}
          strokeWidth={"1.5"}
          width={"6"}
          x={"4"}
          y={"11"}
        ></rect>

        <rect
          height={"19"}
          rx={"1"}
          stroke={"#212121"}
          strokeLinejoin={"round"}
          strokeWidth={"1.5"}
          width={"10"}
          x={"10"}
          y={"2"}
        ></rect>

        <path
          stroke={"#212121"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          strokeWidth={"1.5"}
          d={"M14 16.004h2m-10 0h2m6-4.5h2m-2-4.5h2"}
        ></path>
      </g>
    </svg>
  );
}

export default EnterpriseSvgrepoComSvgIcon;
/* prettier-ignore-end */
