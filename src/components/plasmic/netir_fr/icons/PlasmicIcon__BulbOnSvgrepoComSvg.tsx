/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BulbOnSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BulbOnSvgrepoComSvgIcon(props: BulbOnSvgrepoComSvgIconProps) {
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
        stroke={"currentColor"}
        strokeWidth={"2"}
        d={
          "M12 7a5 5 0 0 0-3.573 8.497c.343.351.626.77.722 1.251l.53 2.644A2 2 0 0 0 11.638 21h.722a2 2 0 0 0 1.96-1.608l.53-2.644c.096-.482.379-.9.722-1.25A5 5 0 0 0 12 7Z"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={"M12 4V3m6 3 1-1m1 7h1M4 12H3m2-7 1 1m4 11h4"}
      ></path>
    </svg>
  );
}

export default BulbOnSvgrepoComSvgIcon;
/* prettier-ignore-end */
