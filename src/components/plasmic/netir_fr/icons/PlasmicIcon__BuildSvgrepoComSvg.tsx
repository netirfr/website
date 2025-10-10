/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BuildSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BuildSvgrepoComSvgIcon(props: BuildSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M31 19h-1v-1a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1h-2v-1a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1h-1v-7a1 1 0 0 0-1-1h-1v-1a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1H9V4a1 1 0 0 0-1-1H7V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1a1 1 0 0 0-1 1v25a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-1 9H2v-7h28zM12 11h1v1h-1zm3 2v7H2v-7zM4 3h1v1H4zm3 2v7H2V5zm13 14h1v1h-1zm7 0h1v1h-1z"
        }
      ></path>
    </svg>
  );
}

export default BuildSvgrepoComSvgIcon;
/* prettier-ignore-end */
