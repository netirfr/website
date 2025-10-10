/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Chart2SvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Chart2SvgrepoComSvgIcon(props: Chart2SvgrepoComSvgIconProps) {
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
        strokeWidth={"1.5"}
        d={"M3 22h18"}
      ></path>

      <path
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        d={
          "M3 11c0-.943 0-1.414.293-1.707S4.057 9 5 9s1.414 0 1.707.293S7 10.057 7 11v6c0 .943 0 1.414-.293 1.707S5.943 19 5 19s-1.414 0-1.707-.293S3 17.943 3 17zm7-4c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17zm7-3c0-.943 0-1.414.293-1.707S18.057 2 19 2s1.414 0 1.707.293S21 3.057 21 4v13c0 .943 0 1.414-.293 1.707S19.943 19 19 19s-1.414 0-1.707-.293S17 17.943 17 17z"
        }
      ></path>
    </svg>
  );
}

export default Chart2SvgrepoComSvgIcon;
/* prettier-ignore-end */
