/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InvoiceSvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InvoiceSvgrepoCom1SvgIcon(
  props: InvoiceSvgrepoCom1SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M6.553 1.606C7.109 1.327 7.773 1 9 1c1.226 0 1.89.327 2.447.605l.016.008C11.9 1.831 12.236 2 13 2c1.237 0 1.97-.461 2.214-.645.38-.286.83-.262 1.14-.118.314.145.646.492.646 1.004V13h3a3 3 0 0 1 3 2.999V19c0 .925-.234 1.685-.637 2.29a3.63 3.63 0 0 1-1.416 1.23 4.7 4.7 0 0 1-1.314.42A4 4 0 0 1 19 23H5c-.925 0-1.685-.234-2.29-.637a3.63 3.63 0 0 1-1.23-1.416A4.7 4.7 0 0 1 1 19V2.241c0-.512.332-.859.646-1.004.31-.144.76-.168 1.14.118C3.03 1.54 3.763 2 5 2c.764 0 1.101-.169 1.537-.387zM3.003 19 3 3.684C3.54 3.866 4.207 4 5 4c1.227 0 1.89-.327 2.447-.606l.016-.008C7.9 3.17 8.236 3 9 3s1.101.169 1.537.386l.016.008C11.109 3.673 11.773 4 13 4c.793 0 1.46-.134 2-.316V19c0 .783.168 1.448.463 2H5c-.575 0-.94-.14-1.18-.3a1.64 1.64 0 0 1-.55-.647A2.7 2.7 0 0 1 3.002 19m16.301 1.967c.216-.036.489-.106.749-.236.256-.129.482-.305.646-.551.16-.24.301-.605.301-1.18v-3.001A1 1 0 0 0 20 15h-3v4c0 .575.14.94.3 1.18.165.246.39.422.647.55a2.7 2.7 0 0 0 .995.267c.12.008.244-.01.362-.03"
        }
        clipRule={"evenodd"}
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M5 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"
        }
      ></path>
    </svg>
  );
}

export default InvoiceSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
