/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DesignSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DesignSvgIcon(props: DesignSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 1024 1024"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {})
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M528.736 872.9c-204.44 9.32-377.762-148.784-387.214-353.216-9.452-204.434 148.54-377.857 352.968-387.44 204.614-9.592 378.228 148.574 387.688 353.194C891.638 690.056 733.36 863.57 528.736 872.9m-27.794-694.814c-179.266 6.159-319.598 156.474-313.441 335.74 6.156 179.266 156.471 319.6 335.737 313.444 179.268-6.154 319.604-156.47 313.446-335.74-6.156-179.268-156.474-319.602-335.742-313.444"
        }
      ></path>

      <path
        d={
          "M349.59 718.87c-10.9 2.114-50.004 9.212-51.664-6.926-8.628-83.548 48.51-166.47 125.7-195.65 14.678-5.55 22.654-16.424 33.648-27.278l173.258-173.27c14.776-14.714 21.784-25.58 43.61-28.572 38.668-3.99 69.17 35.944 47.93 71.598-6.464 10.848-39.378 40.668-50.712 51.982L555.692 526.828c-18.134 18.296-36.944 36.04-54.428 54.954-4.008 4.336-8.02 17.898-10.848 24.162-25.786 57.126-79.288 99.94-140.826 112.926m65.536-153.7c-15.664 1.852-20.766 12.868-31.43 22.538-31.822 28.856-60.848 65.936-62.418 111.082 9.796-1.344 18.916-4.478 28.312-7.474 40.514-19.258 61.478-46.78 93.338-77.64 17.442-16.896 1.344-51.094-27.802-48.506"
        }
      ></path>
    </svg>
  );
}

export default DesignSvgIcon;
/* prettier-ignore-end */
