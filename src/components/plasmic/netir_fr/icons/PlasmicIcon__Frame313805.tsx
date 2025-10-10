/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame313805IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame313805Icon(props: Frame313805IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 96 64"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M32 0A32 32 0 000 32h32V0zm0 32A32 32 0 0164 0v32H32z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame313805Icon;
/* prettier-ignore-end */
