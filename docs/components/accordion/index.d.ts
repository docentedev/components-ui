import React from 'react';
export type AccordionProps = {
    items: {
        label: React.ReactNode | string;
        content: React.ReactNode | string;
    }[];
    active?: number;
    onChange?: (index: number) => void;
    allowedAllClosed?: boolean;
    size?: 'm' | 's' | 'xs';
    gap?: 0 | 0.125 | 0.25 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 4;
    iconPosition?: 'left' | 'right';
    iconSize?: number;
};
declare const Accordion: ({ items, onChange, active, allowedAllClosed, size, gap, iconPosition, iconSize }: AccordionProps) => JSX.Element;
export default Accordion;
