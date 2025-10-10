/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SkillsSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SkillsSvgrepoComSvgIcon(props: SkillsSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 232.688 232.688"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M97.688 61.344h120c8.284 0 15-6.716 15-15s-6.716-15-15-15h-120c-8.284 0-15 6.716-15 15s6.715 15 15 15m120 40h-120c-8.284 0-15 6.716-15 15s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15m0 70h-120c-8.284 0-15 6.716-15 15s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15M48.785 104.408l-9.989-1.452-4.467-9.052a7.5 7.5 0 0 0-13.452 0l-4.468 9.052-9.988 1.452A7.5 7.5 0 0 0 2.263 117.2l7.228 7.045-1.707 9.949a7.5 7.5 0 0 0 10.881 7.908l8.936-4.698 8.936 4.698a7.5 7.5 0 0 0 3.489.861h.021a7.5 7.5 0 0 0 7.276-9.325l-1.612-9.393 7.228-7.045a7.499 7.499 0 0 0-4.154-12.792m0-70-9.989-1.452-4.467-9.052a7.5 7.5 0 0 0-13.452 0l-4.468 9.052-9.988 1.452A7.5 7.5 0 0 0 2.263 47.2l7.228 7.045-1.707 9.949a7.5 7.5 0 0 0 10.881 7.908l8.936-4.698 8.936 4.698a7.5 7.5 0 0 0 3.489.861h.021a7.5 7.5 0 0 0 7.499-7.5 7.5 7.5 0 0 0-.223-1.825l-1.612-9.393 7.228-7.045a7.499 7.499 0 0 0-4.154-12.792m0 140-9.989-1.452-4.467-9.052a7.5 7.5 0 0 0-13.452 0l-4.468 9.052-9.988 1.452A7.5 7.5 0 0 0 2.263 187.2l7.228 7.045-1.707 9.949a7.5 7.5 0 0 0 10.881 7.908l8.936-4.698 8.936 4.698a7.5 7.5 0 0 0 3.489.861h.021a7.5 7.5 0 0 0 7.276-9.325l-1.612-9.393 7.228-7.045a7.499 7.499 0 0 0-4.154-12.792"
        }
      ></path>
    </svg>
  );
}

export default SkillsSvgrepoComSvgIcon;
/* prettier-ignore-end */
