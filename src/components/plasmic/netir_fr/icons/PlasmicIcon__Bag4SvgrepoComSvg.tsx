/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Bag4SvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Bag4SvgrepoComSvgIcon(props: Bag4SvgrepoComSvgIconProps) {
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
        d={
          "M8.25 7.013V6a3.75 3.75 0 117.5 0v1.013c1.297.037 2.087.17 2.692.667.83.68 1.06 1.834 1.523 4.143l.6 3c.664 3.32.996 4.98.096 6.079C19.76 22 18.067 22 14.68 22H9.32c-3.386 0-5.08 0-5.98-1.098-.9-1.098-.568-2.758.096-6.079l.6-3c.462-2.309.693-3.463 1.522-4.143.606-.496 1.396-.63 2.693-.667zM9.75 6a2.25 2.25 0 014.5 0v1h-4.5V6zM15 11a1 1 0 100-2 1 1 0 000 2zm-5-1a1 1 0 11-2 0 1 1 0 012 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Bag4SvgrepoComSvgIcon;
/* prettier-ignore-end */
