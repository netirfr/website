/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _9081120LineDottedIconSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _9081120LineDottedIconSvgIcon(
  props: _9081120LineDottedIconSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon icon-tabler icon-tabler-line-dotted"
      )}
      fill={"none"}
      stroke={"currentColor"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      strokeWidth={"2"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h24v24H0z"} fill={"none"} stroke={"none"}></path>

      <path d={"M4 12v.01M8 12v.01m4-.01v.01m4-.01v.01m4-.01v.01"}></path>
    </svg>
  );
}

export default _9081120LineDottedIconSvgIcon;
/* prettier-ignore-end */
