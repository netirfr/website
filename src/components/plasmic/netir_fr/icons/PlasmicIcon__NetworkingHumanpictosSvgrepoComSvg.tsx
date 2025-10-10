/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NetworkingHumanpictosSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function NetworkingHumanpictosSvgrepoComSvgIcon(
  props: NetworkingHumanpictosSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M256 0c-42.351 0-76.8 34.449-76.8 76.8s34.449 76.8 76.8 76.8 76.8-34.449 76.8-76.8S298.351 0 256 0m0 128c-28.279 0-51.2-22.921-51.2-51.2s22.921-51.2 51.2-51.2 51.2 22.921 51.2 51.2S284.279 128 256 128m76.39 46.626c-2.219-12.177-12.817-21.026-25.19-21.026H204.8c-12.373 0-22.972 8.849-25.182 21.026L169.472 230.4h26.018l9.31-51.2h38.4v51.2h25.6v-51.2h38.4l9.31 51.2h26.018zM86.528 281.6c-42.351 0-76.8 34.449-76.8 76.8s34.449 76.8 76.8 76.8 76.8-34.449 76.8-76.8-34.449-76.8-76.8-76.8m0 128c-28.279 0-51.2-22.921-51.2-51.2s22.921-51.2 51.2-51.2 51.2 22.921 51.2 51.2-22.921 51.2-51.2 51.2"
        }
      ></path>

      <path
        d={
          "M162.918 456.226c-2.219-12.177-12.817-21.026-25.19-21.026h-102.4c-12.373 0-22.972 8.849-25.19 21.026L0 512h26.018l9.31-51.2h38.4V512h25.6v-51.2h38.4l9.31 51.2h26.018zM425.472 281.6c-42.351 0-76.8 34.449-76.8 76.8s34.449 76.8 76.8 76.8 76.8-34.449 76.8-76.8-34.449-76.8-76.8-76.8m0 128c-28.279 0-51.2-22.921-51.2-51.2s22.921-51.2 51.2-51.2 51.2 22.921 51.2 51.2-22.921 51.2-51.2 51.2"
        }
      ></path>

      <path
        d={
          "M501.862 456.226c-2.219-12.177-12.817-21.026-25.19-21.026h-102.4c-12.373 0-22.972 8.849-25.19 21.026L338.944 512h26.018l9.31-51.2h38.4V512h25.6v-51.2h38.4l9.31 51.2H512zm-172.953-83.302L268.8 338.219V268.8c0-7.074-5.726-12.8-12.8-12.8s-12.8 5.726-12.8 12.8v69.419l-60.109 34.705c-6.127 3.524-8.226 11.349-4.685 17.476a12.82 12.82 0 0 0 11.102 6.4c2.176 0 4.378-.546 6.391-1.724l60.1-34.705 60.109 34.705a12.6 12.6 0 0 0 6.391 1.724c4.429 0 8.721-2.304 11.102-6.4 3.534-6.127 1.435-13.952-4.692-17.476"
        }
      ></path>
    </svg>
  );
}

export default NetworkingHumanpictosSvgrepoComSvgIcon;
/* prettier-ignore-end */
