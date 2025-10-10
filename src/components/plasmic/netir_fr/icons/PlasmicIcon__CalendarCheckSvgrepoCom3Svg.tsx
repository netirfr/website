/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarCheckSvgrepoCom3SvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function CalendarCheckSvgrepoCom3SvgIcon(
  props: CalendarCheckSvgrepoCom3SvgIconProps
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
          "M8 2a1 1 0 0 1 1 1h6a1 1 0 1 1 2 0 5 5 0 0 1 5 5v9a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5 1 1 0 0 1 1-1m7.73 9.684a1 1 0 1 0-1.46-1.368l-3.114 3.322-1.527-1.234A1 1 0 0 0 8.37 13.96l2.25 1.818a1 1 0 0 0 1.358-.094z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default CalendarCheckSvgrepoCom3SvgIcon;
/* prettier-ignore-end */
