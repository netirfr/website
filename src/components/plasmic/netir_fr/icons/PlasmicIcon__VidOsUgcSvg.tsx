/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VidOsUgcSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VidOsUgcSvgIcon(props: VidOsUgcSvgIconProps) {
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
          "M521.752 876.5c-206.384 5.448-378.147-157.366-383.739-363.746s157.103-378.256 363.479-383.992c206.58-5.742 378.662 157.148 384.26 363.732s-157.412 378.552-364 384.006m-21.336-711.478C314.044 171.477 168.15 327.714 174.454 514.09s162.422 332.398 348.804 326.246c186.594-6.16 332.82-162.498 326.51-349.088C843.456 304.658 687 158.559 500.416 165.022"
        }
      ></path>

      <path
        d={
          "M518.276 469.29c-48.51 3.304-90.528-33.314-93.886-81.82-3.356-48.508 33.216-90.564 81.72-93.974 48.576-3.414 90.712 33.226 94.074 81.808 3.362 48.58-33.324 90.676-81.908 93.986m4.974 243.662-92.994.024c-14.232 0-28.608.174-42.792-.266-25.892-.806-53.378-25.466-52.75-52.214 2.082-88.738 82.158-165.99 170.042-168.068 87.234-9.09 184.166 71.5 187.154 160.054.954 28.224-17.854 52.718-45.534 58.772-14.132 2.894-33.216 1.726-47.946 1.726zm-38.47-174.79c-18.194 2.818-13.774 23.252-13.38 36.934l2.756 68.002c.376 8.08 2.194 28.908 16.38 22.882 19.094-8.108 38.906-21.816 56.952-31.684l26.372-14.91c7.086-4.038 14.062-6.554 18.582-13.666.476-13.19-5.196-14.61-16.204-20.278-17.782-9.152-76.536-46.232-91.458-47.28"
        }
      ></path>
    </svg>
  );
}

export default VidOsUgcSvgIcon;
/* prettier-ignore-end */
