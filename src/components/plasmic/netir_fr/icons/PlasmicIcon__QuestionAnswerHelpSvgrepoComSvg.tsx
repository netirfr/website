/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type QuestionAnswerHelpSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function QuestionAnswerHelpSvgrepoComSvgIcon(
  props: QuestionAnswerHelpSvgrepoComSvgIconProps
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
        strokeWidth={"1.4"}
        d={
          "M4 21v-1.5A5.5 5.5 0 0 1 9.5 14h3a5.5 5.5 0 0 1 5.5 5.5V21M7 21v-3m8 3v-3m1.5-12 .337-.505a1.131 1.131 0 1 1 1.74 1.427l-.723.724a1.2 1.2 0 0 0-.354.854m0 1.5v.2m-3.672-5.302a4.5 4.5 0 1 1 .485 5.78M15 8a4 4 0 1 0-8 0 4 4 0 0 0 8 0"
        }
      ></path>
    </svg>
  );
}

export default QuestionAnswerHelpSvgrepoComSvgIcon;
/* prettier-ignore-end */
