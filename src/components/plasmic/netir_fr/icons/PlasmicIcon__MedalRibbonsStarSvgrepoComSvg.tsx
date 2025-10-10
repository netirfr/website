/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MedalRibbonsStarSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function MedalRibbonsStarSvgrepoComSvgIcon(
  props: MedalRibbonsStarSvgrepoComSvgIconProps
) {
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

      <path
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        d={
          "M11.146 7.023C11.526 6.34 11.716 6 12 6s.474.34.854 1.023l.098.176c.108.194.162.29.246.354.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135.084-.064.138-.16.246-.354z"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        d={"M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z"}
      ></path>

      <path
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        d={
          "m12 16.068-3.771 3.905c-.54.56-.81.839-1.04.935-.52.22-1.099.032-1.373-.448-.12-.21-.158-.59-.232-1.35-.043-.43-.064-.644-.128-.824a1.43 1.43 0 0 0-.835-.864c-.173-.067-.38-.088-.795-.132-.734-.078-1.101-.117-1.305-.241-.463-.284-.646-.883-.433-1.422.094-.237.364-.517.904-1.076L5.456 12M12 16.068l3.771 3.905c.54.56.81.839 1.04.935.52.22 1.099.032 1.373-.448.12-.21.157-.59.232-1.35.043-.43.064-.644.128-.824.144-.402.446-.715.835-.864.173-.067.38-.088.795-.132.734-.078 1.101-.117 1.305-.241.463-.284.646-.883.433-1.422-.094-.237-.364-.517-.904-1.076L18.544 12"
        }
      ></path>
    </svg>
  );
}

export default MedalRibbonsStarSvgrepoComSvgIcon;
/* prettier-ignore-end */
