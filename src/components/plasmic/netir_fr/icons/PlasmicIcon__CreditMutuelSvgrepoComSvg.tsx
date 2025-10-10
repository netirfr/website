/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CreditMutuelSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CreditMutuelSvgrepoComSvgIcon(
  props: CreditMutuelSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 192 192"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinejoin={"round"}
        strokeWidth={"12"}
        d={
          "M96.648 105.213c12.091-.133 22.819 7.889 26.062 19.525s-1.749 23.996-12.17 30.124-23.663 4.494-32.276-3.984a26.636 26.636 0 0 1-4.461-32.177"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinejoin={"round"}
        strokeWidth={"12"}
        d={
          "M96.648 105.213c-6.723-9.986-5.864-23.261 2.17-32.227 8.036-8.965 21.138-11.34 31.815-5.767s16.205 17.673 13.425 29.38c-2.781 11.709-13.161 20.039-25.207 20.228"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinejoin={"round"}
        strokeWidth={"12"}
        d={
          "M96.648 105.213c-5.97 10.362-18.165 15.595-29.78 12.712-11.617-2.883-19.913-13.107-20.332-25.056-.42-11.948 7.14-22.727 18.527-26.414 11.385-3.688 23.84.608 30.52 10.528"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinejoin={"round"}
        strokeWidth={"12"}
        d={
          "m22 125.31 55.335-92.56 39.143.018L170 125.282l-20.116 33.951-108.745.017z"
        }
      ></path>
    </svg>
  );
}

export default CreditMutuelSvgrepoComSvgIcon;
/* prettier-ignore-end */
