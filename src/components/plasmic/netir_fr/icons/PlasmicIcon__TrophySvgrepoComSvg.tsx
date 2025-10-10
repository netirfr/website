/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TrophySvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TrophySvgrepoComSvgIcon(props: TrophySvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22 3h-3V2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1H2a1 1 0 0 0-1 1v2a4.994 4.994 0 0 0 4.276 4.927A7.01 7.01 0 0 0 11 15.92V18H7a1 1 0 0 0-.949.684l-1 3A1 1 0 0 0 6 23h12a1 1 0 0 0 .948-1.316l-1-3A1 1 0 0 0 17 18h-4v-2.08a7.01 7.01 0 0 0 5.724-4.993A4.994 4.994 0 0 0 23 6V4a1 1 0 0 0-1-1M5 8.829A3.01 3.01 0 0 1 3 6V5h2ZM16.279 20l.333 1H7.387l.334-1ZM17 9A5 5 0 0 1 7 9V3h10Zm4-3a3.01 3.01 0 0 1-2 2.829V5h2ZM10.667 8.667 9 7.292 11 7l1-2 1 2 2 .292-1.667 1.375.521 2.333L12 9.667 10.146 11Z"
        }
      ></path>
    </svg>
  );
}

export default TrophySvgrepoComSvgIcon;
/* prettier-ignore-end */
