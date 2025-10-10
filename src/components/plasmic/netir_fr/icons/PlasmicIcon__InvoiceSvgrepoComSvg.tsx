/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InvoiceSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InvoiceSvgrepoComSvgIcon(props: InvoiceSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={"M10 7.995V9H8V7.995zM10 6v.995H8V6zM7 6H5v.995h2zm0 1.995H5V9h2z"}
      ></path>

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM4 4h3V3H4zm7 1H4v5h7zm0 7H8v-1h3z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default InvoiceSvgrepoComSvgIcon;
/* prettier-ignore-end */
