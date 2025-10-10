/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TaskSquareSvgrepoCom2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TaskSquareSvgrepoCom2SvgIcon(
  props: TaskSquareSvgrepoCom2SvgIconProps
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
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.5"}
        d={
          "M12.37 8.88h5.25m-11.24 0 .75.75 2.25-2.25m2.99 8.5h5.25m-11.24 0 .75.75 2.25-2.25"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.5"}
        d={"M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"}
      ></path>
    </svg>
  );
}

export default TaskSquareSvgrepoCom2SvgIcon;
/* prettier-ignore-end */
