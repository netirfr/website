/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type User2SvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function User2SvgrepoComSvgIcon(props: User2SvgrepoComSvgIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M12 6a4 4 0 100 8 4 4 0 000-8zm-2 4a2 2 0 114 0 2 2 0 01-4 0z"}
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M19.328 18.804A9.973 9.973 0 0112 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.963 9.963 0 01-2.55 6.672l.023.098-.145.034zM4 12a8 8 0 1114.483 4.688l-.013-.015c-.48-.564-1.07-.937-1.716-1.183-1.233-.468-2.756-.49-4.254-.49h-1c-1.484 0-2.913.018-4.045.507a3.714 3.714 0 00-1.717 1.472A7.966 7.966 0 014 12zm3.23 6.424A7.964 7.964 0 0012 20a7.967 7.967 0 005.096-1.833 2.082 2.082 0 00-.148-.197c-.228-.267-.52-.464-.904-.61-.83-.315-1.969-.36-3.544-.36h-1c-1.59 0-2.572.049-3.252.343-.397.172-.746.454-1.017 1.08z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default User2SvgrepoComSvgIcon;
/* prettier-ignore-end */
