/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InterfaceUiLayoutAppSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function InterfaceUiLayoutAppSvgrepoComSvgIcon(
  props: InterfaceUiLayoutAppSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={"M3 11h26"}
      ></path>

      <path
        d={
          "M7 9c-.3 0-.5-.1-.7-.3S6 8.3 6 8s.1-.5.3-.7l.1-.1c.1 0 .1-.1.2-.1.1-.1.1-.1.2-.1h.4c.1 0 .1 0 .2.1.1 0 .1.1.2.1l.1.1c.1.1.2.2.2.3.1.1.1.3.1.4s0 .3-.1.4c0 .1-.1.2-.2.3-.2.2-.4.3-.7.3m3 0c-.3 0-.5-.1-.7-.3S9 8.3 9 8c0-.1 0-.3.1-.4s.1-.2.2-.3.2-.2.3-.2c.4-.2.8-.1 1.1.2.1.1.2.2.2.3.1.1.1.3.1.4 0 .3-.1.5-.3.7s-.4.3-.7.3m3 0c-.1 0-.3 0-.4-.1s-.2-.1-.3-.2-.2-.2-.2-.3c-.1-.1-.1-.3-.1-.4s0-.3.1-.4.1-.2.2-.3c.4-.4 1-.4 1.4 0 .1.1.2.2.2.3.1.1.1.3.1.4s0 .3-.1.4-.1.2-.2.3c-.2.2-.4.3-.7.3"
        }
      ></path>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={
          "M27 5H5c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h22c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2M3 19h16m0-8v16"
        }
      ></path>
    </svg>
  );
}

export default InterfaceUiLayoutAppSvgrepoComSvgIcon;
/* prettier-ignore-end */
