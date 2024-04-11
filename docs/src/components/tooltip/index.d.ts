import React from 'react';
export type TooltipProps = {
    children: React.ReactNode;
    content: React.ReactNode;
    position?: 'top' | 'left' | 'right' | 'bottom' | 'top-right' | 'top-left';
    title?: string;
};
declare const Tooltip: ({ children, content, position, title, }: TooltipProps) => JSX.Element;
export default Tooltip;
