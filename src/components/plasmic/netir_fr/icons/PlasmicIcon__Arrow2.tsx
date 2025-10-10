/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Arrow2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Arrow2Icon(props: Arrow2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 131 37"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.37 4.203A2.5 2.5 0 00.63 5.797l4.74-1.594zm57.418 26.299l-.652-2.413.652 2.413zm66.829-13.53a2.5 2.5 0 00-.728-3.46L110.047 1.215a2.499 2.499 0 10-2.732 4.187l16.748 10.93-10.931 16.75a2.5 2.5 0 104.187 2.732l12.298-18.842zM3 5c-2.37.797-2.37.798-2.369.8a2.916 2.916 0 01.017.047l.036.105c.032.087.077.21.136.365.118.31.293.749.53 1.295a45.01 45.01 0 002.22 4.401c2.038 3.556 5.273 8.172 10.07 12.38 9.714 8.52 25.526 15.089 49.801 8.522l-1.305-4.826c-22.672 6.133-36.754-.049-45.198-7.455-4.282-3.755-7.19-7.896-9.029-11.106a40.01 40.01 0 01-1.972-3.907 26.125 26.125 0 01-.545-1.354 6.285 6.285 0 01-.024-.068v.002C5.37 4.202 5.37 4.203 3 5zm60.441 27.915c10.639-2.878 26.772-6.59 40.282-9.591a2540.01 2540.01 0 0124.283-5.265l.024-.005a.055.055 0 01.005-.001h.002l-.514-2.447-.515-2.447h-.001l-.006.002a.755.755 0 00-.024.005l-.094.02-.368.077-1.415.3a2551.293 2551.293 0 00-22.461 4.88c-13.507 3-29.742 6.735-40.503 9.646l1.305 4.826z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Arrow2Icon;
/* prettier-ignore-end */
