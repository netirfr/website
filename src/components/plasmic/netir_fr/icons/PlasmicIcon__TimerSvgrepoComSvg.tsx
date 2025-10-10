/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TimerSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TimerSvgrepoComSvgIcon(props: TimerSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 56 56"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M28 51.906c13.055 0 23.906-10.828 23.906-23.906 0-13.055-10.828-23.906-23.883-23.906-1.242 0-1.851.75-1.851 1.968v9.094c0 1.008.68 1.828 1.71 1.828 1.032 0 1.735-.82 1.735-1.828V8.148C39.93 8.968 47.898 17.5 47.898 28A19.84 19.84 0 0 1 28 47.922c-11.063 0-19.945-8.86-19.922-19.922.023-4.922 1.781-9.398 4.711-12.844.726-.914.773-2.015 0-2.836-.774-.843-2.086-.773-2.93.282C6.273 16.773 4.094 22.164 4.094 28c0 13.078 10.828 23.906 23.906 23.906m3.75-20.297c1.851-1.922 1.477-4.547-.75-6.093l-12.4-8.649c-1.171-.82-2.39.399-1.57 1.57l8.649 12.399c1.547 2.227 4.171 2.625 6.07.773"
        }
      ></path>
    </svg>
  );
}

export default TimerSvgrepoComSvgIcon;
/* prettier-ignore-end */
