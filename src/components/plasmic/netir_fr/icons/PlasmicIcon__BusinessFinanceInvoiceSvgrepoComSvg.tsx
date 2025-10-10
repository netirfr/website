/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BusinessFinanceInvoiceSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function BusinessFinanceInvoiceSvgrepoComSvgIcon(
  props: BusinessFinanceInvoiceSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        d={"M19 3v6h6l-6-6H7v26h18V9m-7 5h3m-3 4h3m-5 4h5m-8-10v1m0 6v1"}
      ></path>

      <path
        d={
          "M14 13h-1.5c-.8 0-1.5.7-1.5 1.5v0c0 .8.7 1.5 1.5 1.5h1c.8 0 1.5.7 1.5 1.5v0c0 .8-.7 1.5-1.5 1.5H12"
        }
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default BusinessFinanceInvoiceSvgrepoComSvgIcon;
/* prettier-ignore-end */
