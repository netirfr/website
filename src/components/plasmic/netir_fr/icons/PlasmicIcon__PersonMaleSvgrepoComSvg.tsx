/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PersonMaleSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PersonMaleSvgrepoComSvgIcon(
  props: PersonMaleSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      stroke={"currentColor"}
      strokeWidth={"3"}
      viewBox={"0 0 64 64"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"32"} cy={"18.14"} r={"11.14"}></circle>

      <path
        d={
          "M54.55 56.85A22.55 22.55 0 0 0 32 34.3 22.55 22.55 0 0 0 9.45 56.85Z"
        }
      ></path>
    </svg>
  );
}

export default PersonMaleSvgrepoComSvgIcon;
/* prettier-ignore-end */
