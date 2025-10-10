/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CreateSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CreateSvgrepoComSvgIcon(props: CreateSvgrepoComSvgIconProps) {
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

      <path fill={"currentColor"} d={"M4 1h7a1 1 0 0 1 1 1"}></path>

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M21.306 1.879a3 3 0 0 0-4.243 0L6.389 12.553a3 3 0 0 0-.807 1.47l-.533 2.398a2 2 0 0 0 2.386 2.386l2.398-.533a3 3 0 0 0 1.47-.807L21.977 6.793a3 3 0 0 0 0-4.243zm-2.829 1.414a1 1 0 0 1 1.414 0l.672.671a1 1 0 0 1 0 1.415L18.641 7.3l-2.085-2.086zm-3.336 3.336-7.338 7.338a1 1 0 0 0-.269.49l-.533 2.398 2.398-.533a1 1 0 0 0 .49-.27l7.338-7.338z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default CreateSvgrepoComSvgIcon;
/* prettier-ignore-end */
