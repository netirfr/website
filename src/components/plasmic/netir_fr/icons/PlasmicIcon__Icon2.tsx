/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 52 52"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M47.666 26c0 11.966-9.7 21.666-21.666 21.666a21.56 21.56 0 01-9.646-2.262 3.532 3.532 0 00-2.49-.288l-4.823 1.291a2.816 2.816 0 01-3.447-3.449l1.29-4.823a3.532 3.532 0 00-.291-2.487A21.58 21.58 0 014.333 26c0-11.967 9.7-21.667 21.667-21.667 11.966 0 21.666 9.7 21.666 21.667zM26 15.708a1.625 1.625 0 011.625 1.625v.022c2.36.596 4.333 2.454 4.333 5.033a1.625 1.625 0 01-3.25 0c0-.832-.923-1.985-2.708-1.985-1.786 0-2.709 1.153-2.709 1.985 0 .832.923 1.987 2.709 1.987 3 0 5.958 2.08 5.958 5.236 0 2.579-1.974 4.44-4.333 5.034v.021a1.625 1.625 0 01-3.25 0v-.021c-2.36-.594-4.334-2.455-4.334-5.034a1.625 1.625 0 113.25 0c0 .832.923 1.985 2.709 1.985 1.785 0 2.708-1.152 2.708-1.985 0-.832-.923-1.986-2.708-1.986-3.001 0-5.959-2.08-5.959-5.237 0-2.579 1.974-4.438 4.334-5.033v-.022A1.625 1.625 0 0126 15.708z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
