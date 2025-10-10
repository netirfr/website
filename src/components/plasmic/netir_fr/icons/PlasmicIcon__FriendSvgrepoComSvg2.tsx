/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FriendSvgrepoComSvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FriendSvgrepoComSvg2Icon(props: FriendSvgrepoComSvg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 1000 1000"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M500 69q-119 0-220 59-99 58-157 157-59 101-59 220t59 220q58 99 157 157 101 59 220 59t220-59q99-58 157-157 59-101 59-219.5T877 285q-58-99-157-157-101-59-220-59m132 246q25 0 43 32t18 77-18 77-43.5 32-43-32-17.5-77 17.5-77 43.5-32m-264 0q26 0 43.5 32t17.5 77-17.5 77-43 32-43-32-17.5-77 17.5-77 42.5-32m405 349q-9 15-41 3-38 63-98 100-62 38-134 38t-134-38q-60-37-98-100-32 12-41-3-6-10 3-23 9-15 35-30t44-17 23 7q4 7-.5 17.5T314 640q32 44 80.5 70T500 736t105.5-26 80.5-70q-13-12-17.5-22t-.5-17q5-9 23-7t44 17 35 30q9 13 3 23"
        }
      ></path>
    </svg>
  );
}

export default FriendSvgrepoComSvg2Icon;
/* prettier-ignore-end */
