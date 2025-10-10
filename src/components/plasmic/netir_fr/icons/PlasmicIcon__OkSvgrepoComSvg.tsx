/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OkSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OkSvgrepoComSvgIcon(props: OkSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 24 24"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M19.3 5.3L9 15.6l-4.3-4.3-1.4 1.4 5 5 .7.7.7-.7 11-11-1.4-1.4z"}
      ></path>

      <path fill={"none"} d={"M0 0h24v24H0z"}></path>
    </svg>
  );
}

export default OkSvgrepoComSvgIcon;
/* prettier-ignore-end */
