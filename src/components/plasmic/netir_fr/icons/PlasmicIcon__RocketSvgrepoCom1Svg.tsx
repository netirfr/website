/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RocketSvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RocketSvgrepoCom1SvgIcon(props: RocketSvgrepoCom1SvgIconProps) {
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
          "M3.724 8.452 7.29 7.194a18 18 0 0 0-1.887 3.176zm-2.477.207 3.303 3.774-.478 1.196a1 1 0 0 0 .22 1.078l.315.314c-1.704 1.92-2.644 3.929-3.556 6.663a1 1 0 0 0 1.265 1.265c2.734-.912 4.743-1.852 6.663-3.556l.314.314a1 1 0 0 0 1.078.221l1.196-.478 3.774 3.303a1 1 0 0 0 1.602-.42l2.986-8.46A13 13 0 0 0 23 5.48V2a1 1 0 0 0-1-1h-3.48a13 13 0 0 0-8.392 3.07l-8.46 2.987a1 1 0 0 0-.42 1.601m2.438 11.656c.628-1.516 1.332-2.722 2.339-3.877l1.538 1.538c-1.155 1.007-2.361 1.711-3.877 2.339m6.556-2.488-.534-.534-3-3-.534-.534.71-1.775a16 16 0 0 1 2.708-4.47l.576-.673A11 11 0 0 1 18.52 3H21v2.48a11 11 0 0 1-3.841 8.353l-.673.576a16 16 0 0 1-4.47 2.708zm5.307 2.449-1.918-1.678a18 18 0 0 0 3.176-1.887zM15 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default RocketSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
