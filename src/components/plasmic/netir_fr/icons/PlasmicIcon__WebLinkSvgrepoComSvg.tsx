/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WebLinkSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WebLinkSvgrepoComSvgIcon(props: WebLinkSvgrepoComSvgIconProps) {
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
        fillRule={"evenodd"}
        d={
          "M5.636 5.636a4 4 0 0 1 5.657 0l2.828 2.828a4 4 0 0 1 0 5.657 1 1 0 1 1-1.414-1.414 2 2 0 0 0 0-2.828L9.88 7.05a2 2 0 0 0-2.83 2.83l.707.707A1 1 0 1 1 6.343 12l-.707-.707a4 4 0 0 1 0-5.657m5.657 4.243a1 1 0 0 1 0 1.414 2 2 0 0 0 0 2.828l2.828 2.829a2 2 0 0 0 2.829-2.829l-.707-.707A1 1 0 1 1 17.657 12l.707.707a4 4 0 0 1-5.657 5.657L9.88 15.536a4 4 0 0 1 0-5.657 1 1 0 0 1 1.414 0"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default WebLinkSvgrepoComSvgIcon;
/* prettier-ignore-end */
