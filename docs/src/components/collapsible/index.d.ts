import React from 'react';
type CollapsibleProps = {
    children: React.ReactNode | JSX.Element;
    open: boolean;
};
declare const Collapsible: ({ children, open }: CollapsibleProps) => JSX.Element;
export default Collapsible;
