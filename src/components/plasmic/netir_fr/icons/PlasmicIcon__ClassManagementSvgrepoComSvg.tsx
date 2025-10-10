/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClassManagementSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ClassManagementSvgrepoComSvgIcon(
  props: ClassManagementSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames("plasmic-default__svg", className, "icon")}
      version={"1.1"}
      viewBox={"0 0 1024 1024"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M427.84 547.52a193.6 193.6 0 1 0-193.6-193.6 193.92 193.92 0 0 0 193.6 193.6m0-323.52a129.6 129.6 0 1 1-129.6 129.6A129.92 129.92 0 0 1 427.84 224m394.88 713.28a32 32 0 0 0-45.44 0 32 32 0 0 0-6.72 10.56A32 32 0 0 0 768 960a32 32 0 1 0 64 0 32 32 0 0 0-2.56-12.16 32 32 0 0 0-6.72-10.56M672 928H544a32 32 0 0 0 0 64h128a32 32 0 0 0 0-64"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M776.96 861.76h2.24a32 32 0 0 0 4.8-3.52l3.84-3.2a32 32 0 0 0 3.84-5.76 20.16 20.16 0 0 0 4.16-10.88 32 32 0 0 0 0-5.76 32 32 0 0 0 0-6.4 30 30 0 0 0 0-4.8 394.56 394.56 0 0 0-367.36-256A400.64 400.64 0 0 0 32 960a32 32 0 0 0 32 32h352a32 32 0 0 0 0-64H98.56a335.04 335.04 0 0 1 329.28-299.84A330.88 330.88 0 0 1 736 843.52v2.56a32 32 0 0 0 15.04 14.4h1.6a28.48 28.48 0 0 0 23.04 0zM565.76 124.8A110.08 110.08 0 1 1 689.6 304.64a32 32 0 1 0 28.8 57.28A174.08 174.08 0 1 0 522.24 77.76a32 32 0 1 0 43.52 47.04M675.2 389.44a32 32 0 0 0-6.4 64 293.44 293.44 0 0 1 256 256H832a32 32 0 0 0 0 64h128a32 32 0 0 0 32-32 359.36 359.36 0 0 0-316.8-352"
        }
      ></path>
    </svg>
  );
}

export default ClassManagementSvgrepoComSvgIcon;
/* prettier-ignore-end */
