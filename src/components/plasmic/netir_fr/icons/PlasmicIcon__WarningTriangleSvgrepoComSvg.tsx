/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WarningTriangleSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function WarningTriangleSvgrepoComSvgIcon(
  props: WarningTriangleSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      fill={"currentColor"}
      fillRule={"evenodd"}
      strokeLinejoin={"round"}
      strokeMiterlimit={"2"}
      clipRule={"evenodd"}
      version={"1.1"}
      viewBox={"0 0 64 64"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"none"} d={"M-640-64H640v800H-640z"}></path>

      <g fillRule={"nonzero"}>
        <path
          d={
            "M32.427 7.987c2.183.124 4 1.165 5.096 3.281l17.936 36.208c1.739 3.66-.954 8.585-5.373 8.656H13.967c-4.022-.064-7.322-4.631-5.352-8.696l18.271-36.207c.342-.65.498-.838.793-1.179 1.186-1.375 2.483-2.111 4.748-2.063m-.295 3.997a2.03 2.03 0 0 0-1.659 1.017C24.161 24.98 18.076 37.082 12.172 49.268c-.546 1.225.391 2.797 1.762 2.863 12.06.195 24.125.195 36.185 0 1.325-.064 2.321-1.584 1.769-2.85-5.793-12.184-11.765-24.286-17.966-36.267-.366-.651-.903-1.042-1.79-1.03"
          }
        ></path>

        <path
          d={
            "M33.631 40.581h-3.348l-.368-16.449h4.1zm-3.828 5.03q0-.913.592-1.514.594-.6 1.618-.601 1.026 0 1.618.601t.593 1.514q0 .88-.577 1.473t-1.634.593-1.634-.593-.576-1.473"
          }
        ></path>
      </g>
    </svg>
  );
}

export default WarningTriangleSvgrepoComSvgIcon;
/* prettier-ignore-end */
