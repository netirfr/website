/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse144IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse144Icon(props: Ellipse144IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 156 156"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"78"}
        cy={"78"}
        r={"78"}
        fill={"currentColor"}
        fillOpacity={".29"}
      ></circle>
    </svg>
  );
}

export default Ellipse144Icon;
/* prettier-ignore-end */
