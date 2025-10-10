/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CheckFileSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CheckFileSvgrepoComSvgIcon(
  props: CheckFileSvgrepoComSvgIconProps
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
          "M13.5 3H8a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h2m3.5-18L19 8.625M13.5 3v4.625a1 1 0 0 0 1 1H19m0 0v4.188M13 19l2 2 5-5"
        }
      ></path>
    </svg>
  );
}

export default CheckFileSvgrepoComSvgIcon;
/* prettier-ignore-end */
