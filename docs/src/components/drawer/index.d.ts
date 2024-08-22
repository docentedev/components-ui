import React from "react";
export type Props = {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
    persistent?: boolean;
    footer?: React.ReactNode | React.ReactNode[];
    header?: React.ReactNode | React.ReactNode[];
    defaultPadding?: boolean;
    fixDrawer?: boolean;
    portal?: boolean;
};
declare const Drawer: ({ children, open, onClose, persistent, header, footer, defaultPadding, fixDrawer, portal, }: Props) => JSX.Element;
export default Drawer;
