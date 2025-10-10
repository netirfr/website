/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon12Icon(props: Icon12IconProps) {
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

      <path fill={"#fff"} d={"M0 0h24v24H0z"}></path>

      <path
        fill={"#df3434"}
        fillRule={"evenodd"}
        d={"M5 9.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0"}
        clipRule={"evenodd"}
      ></path>

      <path
        fill={"#df3434"}
        d={
          "M14.368 12.063a.2.2 0 0 0 .052.252 3.5 3.5 0 1 0 0-5.63.2.2 0 0 0-.053.252c.404.765.633 1.637.633 2.563s-.229 1.798-.633 2.563Z"
        }
      ></path>

      <path
        fill={"#df3434"}
        fillRule={"evenodd"}
        d={
          "M4.641 15.7c1.233-.536 2.85-.7 4.859-.7 2.011 0 3.63.165 4.862.7 1.343.585 2.16 1.58 2.587 2.984A1.02 1.02 0 0 1 15.974 20H3.028a1.02 1.02 0 0 1-.976-1.319c.428-1.404 1.245-2.398 2.59-2.982Z"
        }
        clipRule={"evenodd"}
      ></path>

      <path
        fill={"#df3434"}
        d={
          "M14.819 14.036c-.415.026-.439.582-.058.748 1.042.453 1.827 1.12 2.39 1.972.462.699 1.179 1.244 2.017 1.244h1.78c.707 0 1.224-.703.975-1.39l-.045-.117a3.4 3.4 0 0 0-1.798-1.907c-.816-.38-1.837-.538-3.04-.585L17.02 14H17c-.71 0-1.45-.01-2.181.036"
        }
      ></path>
    </svg>
  );
}

export default Icon12Icon;
/* prettier-ignore-end */
