/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CameraVideoSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CameraVideoSvgrepoComSvgIcon(
  props: CameraVideoSvgrepoComSvgIconProps
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

      <g stroke={"currentColor"} strokeWidth={"2"}>
        <path
          d={
            "M16 16V8a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z"
          }
        ></path>

        <path strokeLinejoin={"round"} d={"m20 7-4 3v4l4 3z"}></path>
      </g>
    </svg>
  );
}

export default CameraVideoSvgrepoComSvgIcon;
/* prettier-ignore-end */
