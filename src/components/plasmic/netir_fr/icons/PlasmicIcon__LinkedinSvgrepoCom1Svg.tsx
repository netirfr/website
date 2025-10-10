/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LinkedinSvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LinkedinSvgrepoCom1SvgIcon(
  props: LinkedinSvgrepoCom1SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"-271 283.9 256 235.1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M-264.4 359.3h49.9V519h-49.9zm23.9-75.4c-18.4 0-30.5 11.9-30.5 27.7 0 15.5 11.7 27.7 29.8 27.7h.4c18.8 0 30.5-12.3 30.4-27.7-.4-15.8-11.7-27.7-30.1-27.7m162.3 73.9c-28.6 0-46.5 15.6-49.8 26.6v-25.1h-56.1c.7 13.3 0 159.7 0 159.7h56.1v-86.3c0-4.9-.2-9.7 1.2-13.1 3.8-9.6 12.1-19.6 27-19.6 19.5 0 28.3 14.8 28.3 36.4V519h56.6v-88.8c0-49.4-27.8-72.4-63.3-72.4"
        }
      ></path>
    </svg>
  );
}

export default LinkedinSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
