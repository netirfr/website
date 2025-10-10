/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Arrow1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Arrow1Icon(props: Arrow1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 116 39"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.244 34.576a2.5 2.5 0 003.512 3.559l-3.512-3.56zm48.587-24.28l.516-2.447-.516 2.447zm65.004 12.081a2.5 2.5 0 00.415-3.51L101.314 1.201a2.5 2.5 0 00-3.926 3.096L109.776 20 94.074 32.388a2.5 2.5 0 003.097 3.925l17.664-13.936zM3 36.355l1.756 1.78.003-.003.014-.014.06-.059.244-.236c.217-.21.54-.519.958-.912.837-.788 2.056-1.913 3.572-3.254 3.036-2.686 7.248-6.22 11.965-9.638 4.73-3.427 9.896-6.684 14.848-8.86 5.02-2.208 9.459-3.142 12.895-2.417l1.032-4.893c-4.978-1.05-10.6.386-15.939 2.732-5.406 2.377-10.896 5.857-15.77 9.389-4.887 3.54-9.228 7.186-12.343 9.942a163.488 163.488 0 00-3.686 3.357 109.91 109.91 0 00-1.357 1.3l-.006.004-.001.002L3 36.355zm46.315-23.613c14.233 3.002 30.158 5.54 42.504 7.327 6.177.894 11.467 1.6 15.215 2.084a762.32 762.32 0 005.855.732l.078.01.02.002a.07.07 0 01.005 0h.001l.294-2.482.293-2.483h-.006l-.018-.003-.075-.009-.297-.036-1.157-.14a765.29 765.29 0 01-4.354-.55 1000.81 1000.81 0 01-15.139-2.073c-12.303-1.78-28.107-4.302-42.187-7.272l-1.032 4.893z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Arrow1Icon;
/* prettier-ignore-end */
