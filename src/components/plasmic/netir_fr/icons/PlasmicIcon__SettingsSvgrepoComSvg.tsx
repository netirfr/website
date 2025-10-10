/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SettingsSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SettingsSvgrepoComSvgIcon(
  props: SettingsSvgrepoComSvgIconProps
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
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M11 3a1 1 0 0 0-1 1v.569c0 .428-.287.8-.682.963-.396.164-.856.102-1.158-.2l-.403-.403a1 1 0 0 0-1.414 0L4.93 6.343a1 1 0 0 0 0 1.414l.402.403c.303.302.365.762.201 1.158S4.997 10 4.57 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.569c.428 0 .8.287.963.682.164.396.102.856-.2 1.158l-.403.403a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.403-.402c.302-.303.762-.365 1.158-.201s.682.535.682.963V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.569c0-.428.287-.8.682-.963.396-.164.856-.102 1.158.2l.403.403a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.402-.403c-.303-.302-.365-.762-.201-1.158s.535-.682.963-.682H20a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-.569c-.428 0-.8-.287-.963-.682-.164-.396-.102-.856.2-1.158l.403-.403a1 1 0 0 0 0-1.414L17.657 4.93a1 1 0 0 0-1.414 0l-.403.402c-.302.303-.762.365-1.158.201S14 4.997 14 4.57V4a1 1 0 0 0-1-1zm1 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        }
        clipRule={"evenodd"}
        opacity={".2"}
      ></path>

      <path
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        d={
          "M11 3h2a1 1 0 0 1 1 1v.569c0 .428.287.8.682.963.396.164.856.102 1.158-.2l.403-.403a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1 0 1.414l-.402.403c-.303.302-.365.762-.201 1.158s.535.682.963.682H20a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.569c-.428 0-.8.287-.963.682-.164.396-.102.856.2 1.158l.403.403a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 0 1-1.414 0l-.403-.402c-.302-.303-.762-.365-1.158-.201s-.682.535-.682.963V20a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-.569c0-.428-.287-.8-.682-.963-.396-.164-.856-.102-1.158.2l-.403.403a1 1 0 0 1-1.414 0L4.93 17.657a1 1 0 0 1 0-1.414l.402-.403c.303-.302.365-.762.201-1.158S4.997 14 4.57 14H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.569c.428 0 .8-.287.963-.682.164-.396.102-.856-.2-1.158l-.403-.403a1 1 0 0 1 0-1.414L6.343 4.93a1 1 0 0 1 1.414 0l.403.402c.302.303.762.365 1.158.201S10 4.997 10 4.57V4a1 1 0 0 1 1-1Z"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        d={"M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"}
      ></path>
    </svg>
  );
}

export default SettingsSvgrepoComSvgIcon;
/* prettier-ignore-end */
