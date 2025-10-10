/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Tree2SvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Tree2SvgrepoComSvgIcon(props: Tree2SvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={
          "M16.74 12.17A3.7 3.7 0 0 1 17 13.5a3.5 3.5 0 0 1-3.5 3.5 3.45 3.45 0 0 1-1.5-.35 3.45 3.45 0 0 1-1.5.35A3.5 3.5 0 0 1 7 13.5a3.7 3.7 0 0 1 .26-1.33 3.48 3.48 0 0 1 .81-5.86 4 4 0 0 1 7.86 0 3.48 3.48 0 0 1 .81 5.86M12 21V11m-2 10h4"
        }
      ></path>
    </svg>
  );
}

export default Tree2SvgrepoComSvgIcon;
/* prettier-ignore-end */
