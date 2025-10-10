/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AddFriendSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AddFriendSvgrepoComSvgIcon(
  props: AddFriendSvgrepoComSvgIconProps
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

      <circle cx={"29.22"} cy={"16.28"} r={"11.14"}></circle>

      <path
        d={
          "M41.32 35.69c-2.69-1.95-8.34-3.25-12.1-3.25A22.55 22.55 0 0 0 6.67 55h29.9"
        }
      ></path>

      <circle cx={"45.38"} cy={"46.92"} r={"11.94"}></circle>

      <path d={"M45.98 39.8v14m-7-7h14"}></path>
    </svg>
  );
}

export default AddFriendSvgrepoComSvgIcon;
/* prettier-ignore-end */
