/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WelcomeLearnMoreSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function WelcomeLearnMoreSvgrepoComSvgIcon(
  props: WelcomeLearnMoreSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {})
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"none"} d={"M0 0h20v20H0z"}></path>

      <path
        d={
          "M10 10 2.54 7.02 3 18H1l.48-11.41L0 6l10-4 10 4zm0-5c-.55 0-1 .22-1 .5s.45.5 1 .5 1-.22 1-.5-.45-.5-1-.5m0 6 5.57-2.23c.71.94 1.2 2.07 1.36 3.3-.3-.04-.61-.07-.93-.07-2.55 0-4.78 1.37-6 3.41A6.99 6.99 0 0 0 4 12c-.32 0-.63.03-.93.07.16-1.23.65-2.36 1.36-3.3z"
        }
      ></path>
    </svg>
  );
}

export default WelcomeLearnMoreSvgrepoComSvgIcon;
/* prettier-ignore-end */
