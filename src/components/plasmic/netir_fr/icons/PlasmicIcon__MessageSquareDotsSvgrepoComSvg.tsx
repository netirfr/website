/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MessageSquareDotsSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function MessageSquareDotsSvgrepoComSvgIcon(
  props: MessageSquareDotsSvgrepoComSvgIconProps
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
        opacity={".15"}
        d={"M20 4H4v12h3v5l5-5h8V4z"}
        fill={"currentColor"}
      ></path>

      <path
        d={"M16 10h.01M12 10h.01M8 10h.01M7 16v5l5-5h8V4H4v12h3z"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MessageSquareDotsSvgrepoComSvgIcon;
/* prettier-ignore-end */
