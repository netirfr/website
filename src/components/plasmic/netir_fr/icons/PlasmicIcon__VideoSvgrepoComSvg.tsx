/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VideoSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VideoSvgrepoComSvgIcon(props: VideoSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      stroke={"currentColor"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      strokeWidth={"2"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "feather feather-video"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"m23 7-7 5 7 5z"}></path>

      <rect width={"15"} height={"14"} x={"1"} y={"5"} rx={"2"} ry={"2"}></rect>
    </svg>
  );
}

export default VideoSvgrepoComSvgIcon;
/* prettier-ignore-end */
