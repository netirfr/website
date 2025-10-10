/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CameraSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CameraSvgrepoComSvgIcon(props: CameraSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 -2 32 32"}
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
          "M16 22a6 6 0 0 1 0-12 6 6 0 0 1 0 12m0-14a8 8 0 1 0 0 16 8 8 0 0 0 0-16m14 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l1-2c.707-1.163.896-2 2-2h10c1.104 0 1.293.837 2 2l1 2h4a2 2 0 0 1 2 2zM28 4h-3l-1-2c-.589-1.163-.896-2-2-2H10C8.896 0 8.53.954 8 2L7 4H4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4"
        }
      ></path>
    </svg>
  );
}

export default CameraSvgrepoComSvgIcon;
/* prettier-ignore-end */
