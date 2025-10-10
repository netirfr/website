/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShareSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShareSvgrepoComSvgIcon(props: ShareSvgrepoComSvgIconProps) {
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
        d={
          "M18 1a4 4 0 0 0-3.96 4.572L8.449 8.836a4 4 0 1 0 0 6.327l5.593 3.26a4 4 0 1 0 1.515-2.59L9.96 12.572a4 4 0 0 0 0-1.144l5.593-3.264A4 4 0 1 0 18 1"
        }
      ></path>
    </svg>
  );
}

export default ShareSvgrepoComSvgIcon;
/* prettier-ignore-end */
