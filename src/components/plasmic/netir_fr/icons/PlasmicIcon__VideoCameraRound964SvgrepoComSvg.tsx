/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VideoCameraRound964SvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function VideoCameraRound964SvgrepoComSvgIcon(
  props: VideoCameraRound964SvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 -1.5 20 20"}
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
          "M18 10.312v2.458l-2.233-1.437L18 10.1zm-6 3.597c0 .569-.448 1.03-1 1.03H3c-.552 0-1-.461-1-1.03V9.788c0-.569.448-1.03 1-1.03h8c.552 0 1 .461 1 1.03zM4.11 4.121c.552 0 1 .463 1 1.03 0 .568-.448 1.03-1 1.03-.551 0-1-.462-1-1.03 0-.567.449-1.03 1-1.03m5-2.06c1.103 0 2 .924 2 2.06s-.897 2.06-2 2.06-2-.923-2-2.06c0-1.136.898-2.06 2-2.06m9.36 5.105L14 10.04V8.242c0-1.007-.62-1.844-1.548-2.022.357-.616.617-1.33.617-2.099C13.069 1.845 11.299 0 9.09 0 7.473 0 6.099.993 5.468 2.415a2.9 2.9 0 0 0-1.363-.354c-1.657 0-2.997 1.383-2.997 3.09 0 .431.004.841.159 1.213C.57 6.687 0 7.404 0 8.242v6.182C0 15.562 1.062 17 2.167 17h10C13.271 17 14 15.562 14 14.424v-1.798l4.47 2.875c.667.429 1.53-.065 1.53-.874V8.04c0-.808-.863-1.302-1.53-.873"
        }
      ></path>
    </svg>
  );
}

export default VideoCameraRound964SvgrepoComSvgIcon;
/* prettier-ignore-end */
