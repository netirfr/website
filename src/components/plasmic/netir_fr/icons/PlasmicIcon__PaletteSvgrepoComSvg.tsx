/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PaletteSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PaletteSvgrepoComSvgIcon(props: PaletteSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.022 23a11.05 11.05 0 0 0 10.921-9.5 5.85 5.85 0 0 0-.577-3.5c-1.655-3.146-4.777-2.671-7.056-2.322-1.18.178-2.4.366-2.865-.035A2.42 2.42 0 0 1 12.02 6c0-2.683 0-5-3-5C3.753 1 1 6.534 1 12a11.023 11.023 0 0 0 11.022 11M9.016 3c.909 0 1 0 1 3a3.94 3.94 0 0 0 1.122 3.168c1.163 1 2.844.741 4.469.494 2.483-.379 4.061-.482 4.986 1.276a3.84 3.84 0 0 1 .363 2.293A9.024 9.024 0 0 1 3 12c0-3.618 1.6-9 6.016-9M5 7.5A1.5 1.5 0 1 1 6.5 9 1.5 1.5 0 0 1 5 7.5M4 12a1.5 1.5 0 1 1 1.5 1.5A1.5 1.5 0 0 1 4 12m3.5 3A1.5 1.5 0 1 1 6 16.5 1.5 1.5 0 0 1 7.5 15m8 3a3.5 3.5 0 1 0-3.5-3.5 3.5 3.5 0 0 0 3.5 3.5m0-5a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5"
        }
      ></path>
    </svg>
  );
}

export default PaletteSvgrepoComSvgIcon;
/* prettier-ignore-end */
