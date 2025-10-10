/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MegaphoneSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MegaphoneSvgrepoComSvgIcon(
  props: MegaphoneSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 -1 32 32"}
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
          "m30 24-7-5V7l7-5zm-9-6h-3V8h3zm-5 0H8c-1.988 0-6-.582-6-5s3.946-5.065 6-5h8zm-5 9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-7h3zM30 0l-9 6H8c-4.418 0-8 2.582-8 7 0 3.733 2.542 6.339 6 7 .045.27 0 8 0 8a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-8h8l9 6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2"
        }
      ></path>
    </svg>
  );
}

export default MegaphoneSvgrepoComSvgIcon;
/* prettier-ignore-end */
