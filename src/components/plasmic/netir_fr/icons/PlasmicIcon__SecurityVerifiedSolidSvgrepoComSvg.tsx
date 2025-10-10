/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SecurityVerifiedSolidSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function SecurityVerifiedSolidSvgrepoComSvgIcon(
  props: SecurityVerifiedSolidSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {})
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"Layer 2"}>
        <path
          fill={"none"}
          d={"M0 0h48v48H0z"}
          data-name={"invisible box"}
        ></path>

        <path
          d={
            "M24 2S6 7.1 6 8v18.2c0 9.2 13.3 17.3 17 19.5a1.8 1.8 0 0 0 2 0c3.8-2.1 17-10.3 17-19.5V8c0-.9-18-6-18-6m9.4 16.4-11 11a1.9 1.9 0 0 1-2.8 0l-4.9-4.9a2.2 2.2 0 0 1-.4-2.7 2 2 0 0 1 3.1-.2l3.6 3.6 9.6-9.6a2 2 0 0 1 2.8 2.8"
          }
          data-name={"icons Q2"}
        ></path>
      </g>
    </svg>
  );
}

export default SecurityVerifiedSolidSvgrepoComSvgIcon;
/* prettier-ignore-end */
