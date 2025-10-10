/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExitSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ExitSvgrepoComSvgIcon(props: ExitSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        stroke={"#292929"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2.5"}
        clipPath={"url(#a)"}
      >
        <path d={"M15 4.001H5v14a2 2 0 0 0 2 2h8m1-5 3-3m0 0-3-3m3 3H9"}></path>
      </g>

      <defs>
        <clipPath id={"a"}>
          <path fill={"#fff"} d={"M0 .001h24v24H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default ExitSvgrepoComSvgIcon;
/* prettier-ignore-end */
