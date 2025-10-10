/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon7Icon(props: Icon7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 61 61"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2 30.5C2 17.065 2 10.348 6.172 6.172 10.351 2 17.065 2 30.5 2c13.435 0 20.152 0 24.325 4.172C59 10.351 59 17.065 59 30.5c0 13.435 0 20.152-4.175 24.325C50.655 59 43.935 59 30.5 59c-13.435 0-20.152 0-24.328-4.175C2 50.655 2 43.935 2 30.5z"
        }
        fill={"#63D0A2"}
      ></path>

      <path
        d={
          "M26.809 19.103a1.908 1.908 0 00-1.418-3.254 1.905 1.905 0 00-1.343.626l-5.881 6.176-1.525-1.601a1.907 1.907 0 10-2.76 2.628l2.905 3.05a1.905 1.905 0 002.76 0l7.262-7.625zm6.244 1.863a1.907 1.907 0 000 3.813h12.709a1.906 1.906 0 000-3.813H33.053zM26.81 36.895a1.906 1.906 0 10-2.76-2.628l-5.882 6.176-1.525-1.601a1.905 1.905 0 10-2.76 2.628l2.905 3.05a1.904 1.904 0 002.76 0l7.262-7.625zm6.244 1.863a1.906 1.906 0 000 3.812h12.709a1.906 1.906 0 000-3.812h-12.71z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
