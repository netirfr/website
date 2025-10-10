/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UserSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UserSvgrepoComSvgIcon(props: UserSvgrepoComSvgIconProps) {
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

      <circle cx={"12"} cy={"8"} r={"4"} fill={"#222"}></circle>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12 13c-3.67 0-6.68 2.42-6.976 5.5-.026.275.2.5.476.5h13a.465.465 0 00.476-.5C18.68 15.42 15.67 13 12 13z"
        }
        fill={"#2A4157"}
        fillOpacity={".24"}
      ></path>
    </svg>
  );
}

export default UserSvgrepoComSvgIcon;
/* prettier-ignore-end */
