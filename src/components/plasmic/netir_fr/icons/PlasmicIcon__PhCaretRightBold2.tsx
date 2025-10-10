/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhCaretRightBold2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhCaretRightBold2Icon(props: PhCaretRightBold2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 34"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.75 29.219a1.594 1.594 0 01-1.127-2.721L21.121 17l-9.498-9.498a1.594 1.594 0 012.254-2.254l10.625 10.625a1.594 1.594 0 010 2.254L13.877 28.752a1.589 1.589 0 01-1.127.467z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhCaretRightBold2Icon;
/* prettier-ignore-end */
