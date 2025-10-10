/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PercentSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PercentSvgrepoComSvgIcon(props: PercentSvgrepoComSvgIconProps) {
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
        fill={"currentColor"}
        d={"M21.707 3.707a1 1 0 0 0-1.414-1.414l-18 18a1 1 0 1 0 1.414 1.414z"}
      ></path>

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M11 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-6.993 0a2.493 2.493 0 1 0 4.986 0 2.493 2.493 0 0 0-4.986 0M22 17.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-6.993 0a2.493 2.493 0 1 0 4.986 0 2.493 2.493 0 0 0-4.986 0"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default PercentSvgrepoComSvgIcon;
/* prettier-ignore-end */
