import React from "react";
type MarginSize = 1 | 2 | 3 | 4;
type JustifyContent = "center" | "flex-start" | "flex-end" | "space-between" | "space-evenly" | "space-around" | "initial" | "inherit" | "end";
export type RowProps = {
    marginTop?: MarginSize;
    marginBottom?: MarginSize;
    justifyContent?: JustifyContent;
    children: React.ReactNode;
    container?: boolean;
    gap?: MarginSize;
};
export declare const Row: (props: RowProps) => JSX.Element;
export default Row;
