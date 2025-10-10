/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SeoSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SeoSvgrepoComSvgIcon(props: SeoSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.293 18.707a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.262-.125l2.318 1.545 2.42-2.42a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.262.125l-2.318-1.545-2.42 2.42a1 1 0 0 1-1.414 0M22 3v18a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h17V8H4v4a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1M4 6h16V4H4Zm10.707 6.707 1-1a1 1 0 0 0-1.414-1.414l-1 1a1 1 0 1 0 1.414 1.414"
        }
      ></path>
    </svg>
  );
}

export default SeoSvgrepoComSvgIcon;
/* prettier-ignore-end */
