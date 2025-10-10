/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DollarCircleSvgrepoCom1SvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function DollarCircleSvgrepoCom1SvgIcon(
  props: DollarCircleSvgrepoCom1SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
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
          "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm12-6a1 1 0 10-2 0v1a3 3 0 000 6h2a1 1 0 110 2H9a1 1 0 100 2h2v1a1 1 0 102 0v-1a3 3 0 100-6h-2a1 1 0 110-2h4a1 1 0 100-2h-2V6z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default DollarCircleSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
