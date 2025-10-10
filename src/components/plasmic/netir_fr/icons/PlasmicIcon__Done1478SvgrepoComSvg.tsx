/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Done1478SvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Done1478SvgrepoComSvgIcon(
  props: Done1478SvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 -.5 21 21"}
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
          "m14.23 8.168-4.452 4.24a1.09 1.09 0 0 1-1.49 0l-2.225-2.119a.966.966 0 0 1 0-1.414c.41-.39 1.075-.39 1.484 0l.744.708c.41.39 1.074.39 1.484 0l2.97-2.829a1.086 1.086 0 0 1 1.486 0 .966.966 0 0 1 0 1.414M18.9 0H2.1C.94 0 0 .895 0 2v16c0 1.104.94 2 2.1 2h16.8c1.16 0 2.1-.896 2.1-2V2c0-1.105-.94-2-2.1-2"
        }
      ></path>
    </svg>
  );
}

export default Done1478SvgrepoComSvgIcon;
/* prettier-ignore-end */
