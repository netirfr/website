/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WebdesignSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WebdesignSvgIcon(props: WebdesignSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 1024 1024"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {})
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M526.736 875.516c-206.06 8.012-379.54-152.658-387.329-358.726s153.071-379.375 359.147-386.939c205.76-7.553 378.742 153.005 386.518 358.757S732.48 867.516 526.736 875.516m-26.886-699.48c-180.442 6.773-321.197 158.6-314.312 339.04 6.884 180.438 158.798 321.098 339.232 314.104 180.278-6.99 320.79-158.742 313.912-339.024-6.878-180.284-158.544-320.888-338.832-314.12"
        }
      ></path>

      <path
        d={
          "M447.736 499.108c9.62-7.798 20.172-19.48 29.082-28.344l160.814-161.006c13.324-13.316 21.308-24.412 40.76-27.59 41.526-4.896 66.474 42.148 46.58 76.446-4.302 7.416-13.458 15.626-19.514 21.77l-189.09 189.238c-2.22 45.434-25.336 75.434-69.388 89.94-33.184 10.926-65.768 24.61-98.36 37.172-9.132 3.418-42.3 21.046-41.754-1.512.25-10.276 26.304-74.708 31.798-89.782l13.74-37.914c18.258-51.33 35.812-70.66 95.332-68.418m-15.19 22.582c-48.2 5.788-49.648 30.872-63.992 71.188l-16.642 46.15c-4.342 11.928-9.182 25.534-14.442 37.054 14.84-5.992 29.408-11.308 44.2-17.106l47.804-17.996c34.616-12.982 61.382-23.29 63.144-68.996-17.156-15.716-35.3-36.098-52.83-50.294-2.064-.028-5.282-.176-7.242 0"
        }
      ></path>
    </svg>
  );
}

export default WebdesignSvgIcon;
/* prettier-ignore-end */
