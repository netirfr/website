/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DollarCircleSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DollarCircleSvgrepoComSvgIcon(
  props: DollarCircleSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.5 9s-.74-1-2.5-1c-3.5 0-3.5 4 0 4s3.5 4 0 4c-1.5 0-2.5-1-2.5-1M12 7v10"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default DollarCircleSvgrepoComSvgIcon;
/* prettier-ignore-end */
