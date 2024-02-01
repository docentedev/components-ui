import { ReactChild } from "react";
export type MarginSize = 1 | 2 | 3 | 4;
export type ColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColProps = {
    sm?: ColSize;
    md?: ColSize;
    lg?: ColSize;
    xl?: ColSize;
    xxl?: ColSize;
    col?: ColSize;
    marginTop?: MarginSize;
    marginBottom?: MarginSize;
    borderRightColor?: string;
    borderRightPosition?: MarginSize;
    children: ReactChild | ReactChild[];
};
declare const Col: (props: ColProps) => JSX.Element;
export default Col;
