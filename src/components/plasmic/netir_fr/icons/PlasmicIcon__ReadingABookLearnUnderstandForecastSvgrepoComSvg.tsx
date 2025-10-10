/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ReadingABookLearnUnderstandForecastSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ReadingABookLearnUnderstandForecastSvgrepoComSvgIcon(
  props: ReadingABookLearnUnderstandForecastSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      fill={"currentColor"}
      baseProfile={"tiny"}
      version={"1.2"}
      viewBox={"-63 65 128 128"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 102.1c9.7 0 17.5-7.9 17.5-17.6S10.7 66.9 1 66.9s-17.6 7.8-17.6 17.6c0 9.7 7.9 17.6 17.6 17.6m17 4.2c8 .3 11.4 6.7 11.4 6.7l25.9 35.6c1.1 1.6 1.7 3.5 1.7 5.6 0 5.5-4.5 10-10 10-1.3 0-2.5-.3-3.7-.7l-15.6-4.4v15.6h-54.2v-15.6l-15.6 4.4c-1.1.4-2.3.7-3.7.7-5.5 0-10-4.5-10-10 0-2.1.6-4 1.7-5.6l25.9-35.6s3.4-6.4 11.4-6.7zM.6 163.8l20.3-6.7-.5-.1c-14-4.1-8.6-22.6 5.4-18.5l1.9.7v-20.9L.6 127.2l-27.2-8.9v20.9l1.9-.7c14-4.1 19.4 14.3 5.4 18.5l-.5.1zm55.8 24.8c1.4 0 2.5-1.4 2.5-3.3s-1.1-3.3-2.5-3.3H-53.2c-1.4 0-2.5 1.5-2.5 3.3s1.1 3.3 2.5 3.3z"
        }
      ></path>
    </svg>
  );
}

export default ReadingABookLearnUnderstandForecastSvgrepoComSvgIcon;
/* prettier-ignore-end */
