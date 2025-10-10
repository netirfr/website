/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UpRightArrowSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UpRightArrowSvgrepoComSvgIcon(
  props: UpRightArrowSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      aria-hidden={"true"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "iconify iconify--emojione-monotone"
      )}
      preserveAspectRatio={"xMidYMid meet"}
      role={"img"}
      viewBox={"0 0 64 64"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M53.213 10.786c-11.715-11.715-30.711-11.715-42.426 0-11.716 11.717-11.716 30.711 0 42.428 11.715 11.715 30.711 11.715 42.426 0 11.716-11.717 11.716-30.711 0-42.428M45 41.132l-7.585-7.414-13.458 13.281L17 39.954l13.218-13.391-7.343-7.564H45z"
        }
      ></path>
    </svg>
  );
}

export default UpRightArrowSvgrepoComSvgIcon;
/* prettier-ignore-end */
