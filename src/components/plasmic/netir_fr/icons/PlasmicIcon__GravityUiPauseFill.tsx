/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GravityUiPauseFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GravityUiPauseFillIcon(props: GravityUiPauseFillIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2.813 6.563a3.75 3.75 0 013.75-3.75h2.812a3.75 3.75 0 013.75 3.75v16.875a3.75 3.75 0 01-3.75 3.75H6.562a3.75 3.75 0 01-3.75-3.75V6.563zm14.062 0a3.75 3.75 0 013.75-3.75h2.813a3.75 3.75 0 013.75 3.75v16.875a3.75 3.75 0 01-3.75 3.75h-2.813a3.75 3.75 0 01-3.75-3.75V6.563z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GravityUiPauseFillIcon;
/* prettier-ignore-end */
