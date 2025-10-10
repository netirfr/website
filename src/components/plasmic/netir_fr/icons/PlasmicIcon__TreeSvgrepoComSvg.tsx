/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TreeSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TreeSvgrepoComSvgIcon(props: TreeSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-2 0 40 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"Group 3"}>
        <path
          fill={"currentColor"}
          d={
            "M27.6 7.1A9.9 9.9 0 0 0 18 0a10.21 10.21 0 0 0-9.6 7.1A10.1 10.1 0 0 0 0 17a10 10 0 0 0 4 8 8.825 8.825 0 0 0 6.1 8.5 4.14 4.14 0 0 0 1.9.5h4v4a2 2 0 0 0 4 0v-4h4a4.14 4.14 0 0 0 1.9-.5A8.825 8.825 0 0 0 32 25a10.021 10.021 0 0 0-4.4-17.9m1.3 15.1-1.2.7.2 1.4c0 .2.1.5.1.7a5.04 5.04 0 0 1-3.5 4.8l-.3.1-.2.1h-4v-5.4a2.1 2.1 0 0 0 .6-.4l5.7-5.7a1.98 1.98 0 0 0-2.8-2.8l-3.4 3.4V16a2 2 0 0 0-4 0v14h-4l-.2-.1-.3-.1A5.04 5.04 0 0 1 8.1 25a1.7 1.7 0 0 1 .1-.7l.2-1.4-1.2-.7A6.1 6.1 0 0 1 4.1 17a6.02 6.02 0 0 1 6-6h1.7l.2-1.7a6.054 6.054 0 0 1 12-.1l.2 1.8H26a5.935 5.935 0 0 1 2.9 11.2"
          }
          data-name={"Path 4"}
        ></path>
      </g>
    </svg>
  );
}

export default TreeSvgrepoComSvgIcon;
/* prettier-ignore-end */
