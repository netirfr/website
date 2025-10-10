/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CapEducationHatSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function CapEducationHatSvgrepoComSvgIcon(
  props: CapEducationHatSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
      fill={"#000"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M24.5 34C15.94 34 9 30.154 9 24V14h31v10c0 5.171-6.94 10-15.5 10z"}
        fill={"#a7a8a9"}
      ></path>

      <path
        d={
          "M46.171 9.991L27.3.764a7.518 7.518 0 00-6.6 0L1.829 9.991a3.26 3.26 0 00.15 5.927L4.5 17l16.543 7.079a7.517 7.517 0 005.914 0L43.5 17l2.521-1.078a3.26 3.26 0 00.15-5.931z"
        }
        fill={"#a7a8aa"}
      ></path>

      <path
        d={
          "M40 38a1 1 0 01-1-1V19.361L24.918 12.14a1 1 0 11.914-1.78L41 18.139V37a1 1 0 01-1 1z"
        }
        fill={"#d9d8d8"}
      ></path>

      <ellipse
        cx={"24.5"}
        cy={"11"}
        rx={"4.5"}
        ry={"3"}
        fill={"#a7a8a9"}
      ></ellipse>

      <circle cx={"40"} cy={"39"} r={"4"} fill={"#face53"}></circle>
    </svg>
  );
}

export default CapEducationHatSvgrepoComSvgIcon;
/* prettier-ignore-end */
