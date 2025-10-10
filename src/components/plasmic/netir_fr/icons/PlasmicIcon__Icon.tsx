/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 52 52"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M19.832 11.717C22.577 6.794 23.948 4.333 26 4.333c2.052 0 3.424 2.461 6.169 7.384l.71 1.274c.78 1.4 1.17 2.1 1.777 2.561.607.462 1.365.633 2.882.975l1.378.312c5.33 1.207 7.992 1.81 8.627 3.848.633 2.037-1.183 4.162-4.816 8.411l-.94 1.099c-1.032 1.206-1.55 1.81-1.782 2.556-.231.748-.153 1.554.003 3.163l.143 1.467c.548 5.67.823 8.505-.837 9.763-1.66 1.261-4.155.11-9.143-2.186l-1.293-.593c-1.418-.655-2.126-.98-2.878-.98-.752 0-1.46.325-2.877.98l-1.292.593c-4.99 2.297-7.485 3.445-9.143 2.188-1.662-1.26-1.386-4.095-.838-9.765l.143-1.464c.156-1.612.234-2.418 0-3.164-.23-.747-.748-1.352-1.78-2.556l-.94-1.101c-3.633-4.247-5.449-6.372-4.816-8.411.635-2.039 3.3-2.643 8.63-3.848l1.378-.312c1.514-.342 2.27-.514 2.88-.975.606-.461.996-1.161 1.776-2.561l.71-1.274z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
