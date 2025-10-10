/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UserSvgrepoCom4SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UserSvgrepoCom4SvgIcon(props: UserSvgrepoCom4SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M19.651 19.405c.553-.115.883-.693.608-1.187-.606-1.087-1.56-2.043-2.78-2.771C15.907 14.508 13.98 14 12 14c-1.981 0-3.907.508-5.479 1.447-1.22.728-2.174 1.684-2.78 2.771-.275.494.055 1.072.607 1.187a37.503 37.503 0 0015.303 0z"
        }
        fill={"currentColor"}
      ></path>

      <circle cx={"12"} cy={"8"} r={"5"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default UserSvgrepoCom4SvgIcon;
/* prettier-ignore-end */
