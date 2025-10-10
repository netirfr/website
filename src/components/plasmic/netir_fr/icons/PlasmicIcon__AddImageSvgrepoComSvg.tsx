/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AddImageSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AddImageSvgrepoComSvgIcon(
  props: AddImageSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {})
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"none"} d={"M0 0h24v24H0z"}></path>

      <path
        d={
          "M23 4v2h-3v3h-2V6h-3V4h3V1h2v3zm-8.5 7a1.5 1.5 0 1 0-.001-3.001A1.5 1.5 0 0 0 14.5 11m3.5 3.234-.513-.57a2 2 0 0 0-2.976 0l-.655.73L9 9l-3 3.333V6h7V4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h-2z"
        }
      ></path>
    </svg>
  );
}

export default AddImageSvgrepoComSvgIcon;
/* prettier-ignore-end */
