/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CodeTechDevSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CodeTechDevSvgrepoComSvgIcon(
  props: CodeTechDevSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={"m7 8-4 4 4 4m10-8 4 4-4 4M14 4 9.859 19.455"}
      ></path>
    </svg>
  );
}

export default CodeTechDevSvgrepoComSvgIcon;
/* prettier-ignore-end */
