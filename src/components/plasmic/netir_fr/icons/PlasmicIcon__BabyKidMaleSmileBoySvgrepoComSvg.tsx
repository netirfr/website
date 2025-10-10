/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BabyKidMaleSmileBoySvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function BabyKidMaleSmileBoySvgrepoComSvgIcon(
  props: BabyKidMaleSmileBoySvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
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
          "M27.4 13.3c-1-3.2-3.4-5.8-6.4-7.2q-.6-2.1-2.4-3.6c-.4-.3-1.1-.3-1.4.2-.3.4-.3 1.1.2 1.4 2 1.6 2.6 4.4 1.4 6.7-1 2-3.5 2.7-5.5 1.7-1.5-.8-2.1-2.6-1.3-4.1.3-.5.7-.9 1.3-1.1s1.2-.1 1.7.2c.4.2.7.5.8.9s.1.8-.1 1.2c-.3.5-.1 1.1.4 1.4s1.1.1 1.4-.4c.4-.8.5-1.8.3-2.7s-.9-1.7-1.8-2.1c-1-.5-2.2-.6-3.2-.3-.4.1-.8.3-1.1.6-3.3 1.3-5.8 4-6.9 7.4C3.1 13.8 2 15.3 2 17s1.1 3.2 2.6 3.8C6.2 25.6 10.8 29 16 29s9.8-3.4 11.4-8.3c1.5-.6 2.6-2.1 2.6-3.8 0-1.6-1.1-3.1-2.6-3.6M12 17c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1s-1-.4-1-1zm2 7c-1.7 0-3.2-1.1-3.8-2.7-.2-.5.1-1.1.6-1.3s1.1.1 1.3.6c.3.8 1 1.3 1.9 1.3.6 0 1 .4 1 1s-.4 1.1-1 1.1m6-5c0 .6-.4 1-1 1s-1-.4-1-1v-2c0-.6.4-1 1-1s1 .4 1 1z"
        }
      ></path>
    </svg>
  );
}

export default BabyKidMaleSmileBoySvgrepoComSvgIcon;
/* prettier-ignore-end */
