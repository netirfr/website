/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UserCheckSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UserCheckSvgrepoComSvgIcon(
  props: UserCheckSvgrepoComSvgIconProps
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

      <path fill={"#fff"} d={"M0 0h24v24H0z"}></path>

      <path
        fill={"#323232"}
        fillRule={"evenodd"}
        d={
          "M5 9.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m-.359 6.2c1.233-.536 2.85-.7 4.859-.7 2.011 0 3.63.165 4.862.7 1.343.585 2.16 1.58 2.587 2.984A1.02 1.02 0 0 1 15.974 20H3.028a1.02 1.02 0 0 1-.976-1.319c.428-1.404 1.245-2.398 2.59-2.982M21.707 2.293a1 1 0 0 1 0 1.414l-3.5 3.5a1.707 1.707 0 0 1-2.414 0l-1.5-1.5a1 1 0 0 1 1.414-1.414L17 5.586l3.293-3.293a1 1 0 0 1 1.414 0"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default UserCheckSvgrepoComSvgIcon;
/* prettier-ignore-end */
