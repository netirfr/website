/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlagForFlagFranceSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function FlagForFlagFranceSvgrepoComSvgIcon(
  props: FlagForFlagFranceSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 36 36"}
      aria-hidden={"true"}
      role={"img"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "iconify iconify--twemoji"
      )}
      preserveAspectRatio={"xMidYMid meet"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"#ED2939"}
        d={"M36 27a4 4 0 01-4 4h-8V5h8a4 4 0 014 4v18z"}
      ></path>

      <path
        fill={"#002495"}
        d={"M4 5a4 4 0 00-4 4v18a4 4 0 004 4h8V5H4z"}
      ></path>

      <path fill={"#EEE"} d={"M12 5h12v26H12z"}></path>
    </svg>
  );
}

export default FlagForFlagFranceSvgrepoComSvgIcon;
/* prettier-ignore-end */
