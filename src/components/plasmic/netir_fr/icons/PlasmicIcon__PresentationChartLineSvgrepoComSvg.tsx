/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PresentationChartLineSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function PresentationChartLineSvgrepoComSvgIcon(
  props: PresentationChartLineSvgrepoComSvgIconProps
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

      <path fill={"#fff"} d={"M0 0h24v24H0z"}></path>

      <path
        fill={"#323232"}
        fillRule={"evenodd"}
        d={
          "M22 7v-.066c0-.886 0-1.65-.082-2.262-.088-.655-.287-1.284-.797-1.793-.51-.51-1.138-.709-1.793-.797C18.716 2 17.952 2 17.066 2H6.934c-.886 0-1.65 0-2.262.082-.655.088-1.284.287-1.793.797-.51.51-.709 1.138-.797 1.793C2 5.284 2 6.048 2 6.934v6.132c0 .886 0 1.65.082 2.262.088.655.287 1.284.797 1.793.51.51 1.138.709 1.793.797C5.284 18 6.048 18 6.934 18H10l-1.8 2.4a1 1 0 0 0 1.6 1.2l2.2-2.933 2.2 2.933a1 1 0 0 0 1.6-1.2L14 18h3.066c.886 0 1.65 0 2.262-.082.655-.088 1.284-.287 1.793-.797.51-.51.709-1.138.797-1.793.082-.612.082-1.376.082-2.262zm-4.375-.78a1 1 0 0 1 .156 1.405l-2.603 3.254c-1.108 1.385-3.28 1.155-4.072-.432a.43.43 0 0 0-.722-.076l-2.603 3.254a1 1 0 1 1-1.562-1.25l2.603-3.254c1.108-1.385 3.28-1.155 4.072.432a.43.43 0 0 0 .722.076l2.603-3.254a1 1 0 0 1 1.406-.156"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default PresentationChartLineSvgrepoComSvgIcon;
/* prettier-ignore-end */
