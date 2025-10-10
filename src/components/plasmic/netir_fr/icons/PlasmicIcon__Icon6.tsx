/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 71 71"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M10.248 10.247c-4.331 4.337-4.331 11.307-4.331 25.252 0 13.946 0 20.919 4.33 25.25 4.338 4.334 11.308 4.334 25.253 4.334 13.946 0 20.919 0 25.25-4.334 4.333-4.328 4.333-11.304 4.333-25.25 0-13.945 0-20.918-4.334-25.252C56.421 5.916 49.447 5.916 35.5 5.916c-13.945 0-20.918 0-25.252 4.331zm30.43 19.336a2.22 2.22 0 002.218 2.218h2.041l-5.955 5.956a.741.741 0 01-1.047 0l-4.692-4.692a5.177 5.177 0 00-7.319 0l-6.784 6.783a2.22 2.22 0 103.136 3.136L29.06 36.2a.739.739 0 011.047 0l4.692 4.692a5.177 5.177 0 007.319 0l5.955-5.952v2.038a2.219 2.219 0 004.438 0v-7.395a2.219 2.219 0 00-2.22-2.22h-7.395a2.219 2.219 0 00-2.219 2.22z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
