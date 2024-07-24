import React from "react";
import { IconProps } from "../components/icon";
import Icons from "../components/icon/icons";
declare const makaIcon: (icon: keyof typeof Icons | React.ReactElement<IconProps>, size: number, color?: string) => JSX.Element;
export default makaIcon;
