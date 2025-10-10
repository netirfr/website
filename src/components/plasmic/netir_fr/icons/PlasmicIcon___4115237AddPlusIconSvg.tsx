/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _4115237AddPlusIconSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _4115237AddPlusIconSvgIcon(
  props: _4115237AddPlusIconSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M16 7v18m-9-9h18"}
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default _4115237AddPlusIconSvgIcon;
/* prettier-ignore-end */
