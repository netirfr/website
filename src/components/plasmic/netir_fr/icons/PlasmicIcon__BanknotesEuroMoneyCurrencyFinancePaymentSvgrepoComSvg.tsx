/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BanknotesEuroMoneyCurrencyFinancePaymentSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function BanknotesEuroMoneyCurrencyFinancePaymentSvgrepoComSvgIcon(
  props: BanknotesEuroMoneyCurrencyFinancePaymentSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillOpacity={"1"}
        d={
          "M0 4v11h18V4zm1 1h16v9H1zm2 1c0 .558-.442 1-1 1v1c1.099 0 2-.901 2-2zm7.479 0-.393.025-.387.067-.375.111-.363.152-.342.192-.318.228-.291.264-.26.295-.225.32-.19.346h-.862L6 9h1.035l-.033.334v.332l.033.334h-.562L6 11h1.336l.19.346.224.32.26.295.29.264.32.228.34.193.364.15.375.112.387.07.393.022.392-.018.387-.064.377-.107.365-.147-.43-.904-.32.123-.33.084-.34.033-.344-.014-.338-.058-.324-.104-.308-.15-.287-.188-.256-.226-.225-.26h1.79l.474-1H8.049l-.043-.334v-.332L8.049 9h2.69l.472-1H8.498l.225-.26.256-.226.287-.188.308-.15.324-.104.338-.058L10.58 7l.34.033.33.084.32.123.43-.902-.365-.149-.377-.107-.387-.062zM14 6c0 1.099.901 2 2 2V7c-.558 0-1-.442-1-1zm5 0v10H2v1h18V6zM2 11v1c.558 0 1 .442 1 1h1c0-1.099-.901-2-2-2m14 0c-1.099 0-2 .901-2 2h1c0-.558.442-1 1-1z"
        }
      ></path>
    </svg>
  );
}

export default BanknotesEuroMoneyCurrencyFinancePaymentSvgrepoComSvgIcon;
/* prettier-ignore-end */
