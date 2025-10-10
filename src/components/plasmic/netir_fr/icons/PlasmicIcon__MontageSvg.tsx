/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MontageSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MontageSvgIcon(props: MontageSvgIconProps) {
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
          "M518.752 870.212c-202.962 3.766-370.478-157.85-373.993-360.816s158.307-370.283 361.277-373.548c202.616-3.258 369.58 158.22 373.088 360.832 3.508 202.614-157.764 369.774-360.372 373.532m-17.084-684.397c-175.346 5.731-312.817 152.571-306.993 327.913s152.737 312.736 328.077 306.818c175.206-5.914 312.474-152.692 306.654-327.902S676.882 180.089 501.668 185.815"
        }
      ></path>

      <path
        d={
          "m562.252 579.91-43.008 24.582c-25.362 14.384-49.22 28.39-72.464 46.14-26.292 20.08-30.024 27.868-29.988-12.56V371.998c0-9.268-3.092-31.744 4.642-36.452 7.624-.522 19.61 13.686 26.462 18.976 41.902 32.342 91.116 58.048 137.378 83.484l27.506 14.912c23.57 12.63 49.788 29.068 39.64 61.716-8.402 27.032-65.454 52.014-90.168 65.276"
        }
      ></path>
    </svg>
  );
}

export default MontageSvgIcon;
/* prettier-ignore-end */
