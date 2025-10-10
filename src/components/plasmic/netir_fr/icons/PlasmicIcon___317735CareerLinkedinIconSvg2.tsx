/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _317735CareerLinkedinIconSvg2IconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function _317735CareerLinkedinIconSvg2Icon(
  props: _317735CareerLinkedinIconSvg2IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.0"}
      xmlSpace={"preserve"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"currentColor"}>
        <path
          d={
            "M0 9h7v23H0zm24.003 0C20 9 18.89 10.312 18 12V9h-7v23h7V19c0-2 0-4 3.5-4s3.5 2 3.5 4v13h7V19c0-6-1-10-7.997-10z"
          }
        ></path>

        <circle cx={"3.5"} cy={"3.5"} r={"3.5"}></circle>
      </g>
    </svg>
  );
}

export default _317735CareerLinkedinIconSvg2Icon;
/* prettier-ignore-end */
