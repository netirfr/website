/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Video1SvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Video1SvgrepoComSvgIcon(props: Video1SvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M395.6 69.8 325.8 0h-58.2l69.8 69.8zM23.3 0H0v69.8h93.1zm221.1 69.8L174.5 0h-58.2l69.8 69.8zm174.5 93.1h-93.1l69.8-69.8h-58.2l-69.8 69.8h-93.1l69.8-69.8h-58.2l-69.8 69.8h-93l69.8-69.8H0v372.4C0 491.1 20.9 512 46.5 512h418.9c25.7 0 46.5-20.9 46.5-46.5V93.1h-23.3zM186.2 442.2V232.7l186.2 104.7zM418.9 0l69.8 69.8H512V0z"
        }
      ></path>
    </svg>
  );
}

export default Video1SvgrepoComSvgIcon;
/* prettier-ignore-end */
