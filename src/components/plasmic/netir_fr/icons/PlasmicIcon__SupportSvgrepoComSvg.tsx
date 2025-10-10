/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SupportSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SupportSvgrepoComSvgIcon(props: SupportSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
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
          "M422.401 217.173c-6.613-67.84-46.72-174.506-170.667-174.506-123.946 0-164.053 106.666-170.666 174.506-23.2 8.805-38.503 31.08-38.4 55.894v29.866c0 32.99 26.743 59.734 59.733 59.734s59.733-26.744 59.733-59.734v-29.866c-.107-24.279-14.848-46.095-37.333-55.254 4.267-39.253 25.173-132.48 126.933-132.48s122.454 93.227 126.72 132.48c-22.44 9.178-37.106 31.01-37.12 55.254v29.866a59.95 59.95 0 0 0 33.92 53.76c-8.96 16.854-31.786 39.68-87.893 46.507-11.215-17.03-32.914-23.744-51.788-16.024s-29.646 27.717-25.71 47.726c3.936 20.008 21.48 34.431 41.871 34.431a42.67 42.67 0 0 0 37.974-23.68c91.52-10.453 120.746-57.6 129.92-85.333 24.817-8.039 41.508-31.302 41.173-57.387v-29.866c.103-24.815-15.2-47.089-38.4-55.894m-302.933 85.76c0 9.426-7.641 17.067-17.067 17.067s-17.067-7.641-17.067-17.067v-29.866a17.067 17.067 0 1 1 34.134 0zM384 273.067c0-9.426 7.641-17.067 17.067-17.067s17.066 7.641 17.066 17.067v29.866c0 9.426-7.64 17.067-17.066 17.067S384 312.359 384 302.933z"
        }
      ></path>
    </svg>
  );
}

export default SupportSvgrepoComSvgIcon;
/* prettier-ignore-end */
