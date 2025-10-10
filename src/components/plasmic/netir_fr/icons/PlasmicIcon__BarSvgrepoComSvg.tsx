/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BarSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BarSvgrepoComSvgIcon(props: BarSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"-6.5 0 32 32"}
      version={"1.1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M8.469-1.156h2.25v29.813h-2.25V-1.156z"}></path>
    </svg>
  );
}

export default BarSvgrepoComSvgIcon;
/* prettier-ignore-end */
