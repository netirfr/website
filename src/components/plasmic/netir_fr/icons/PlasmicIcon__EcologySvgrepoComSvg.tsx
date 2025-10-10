/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EcologySvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EcologySvgrepoComSvgIcon(props: EcologySvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 459.5 459.5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M57.209 114.262c-2.694 24.018.306 58.49 51.104 72.307 62.557 17.017 128.982-17.122 157.053-34.333a5.67 5.67 0 0 0 2.583-6.017 5.67 5.67 0 0 0-4.809-4.445c-16.989-2.223-42.893-8.021-54.135-23.057-47.583-63.629-76.913-58.553-94.328-58.553-19.788 0-35.817 9.242-45.927 23.184-9.904-10.608-19.772-23.753-29.096-40.065-4.11-7.192-13.272-9.689-20.467-5.579-7.192 4.11-9.69 13.273-5.579 20.466 13.739 24.034 28.676 42.261 43.601 56.092m399.53 282.191-92.748-145.746c-18.484-23.987-48.681-37.119-79.083-33.809l-101.367 11.027c-14.622 1.591-25.186 14.733-23.595 29.355 1.59 14.621 14.732 25.184 29.355 23.596l96.907-10.542c-176.643 34.389-159.795 31.386-165.694 31.612L44.285 234.46c-11.013-9.749-27.843-8.726-37.593 2.287s-8.726 27.844 2.287 37.594l84.228 74.568a26.6 26.6 0 0 0 18.677 6.671l179.071-6.887 42.769 63.354c4.548 6.736 11.639 10.726 19.13 11.561l.102.168h88.743a17.803 17.803 0 0 0 15.04-27.323"
        }
      ></path>
    </svg>
  );
}

export default EcologySvgrepoComSvgIcon;
/* prettier-ignore-end */
