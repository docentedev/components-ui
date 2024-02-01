import React from 'react';
export type CardAccordionDraggableProps = {
    items: {
        label: React.ReactNode | string;
        content: React.ReactNode | string;
        data?: unknown;
    }[];
    active?: number;
    tooltipText?: string;
    onChange: <T>(e: T) => void;
    onClickMinus?: <T>(index: number, item: T) => void;
};
declare const CardAccordionDraggable: ({ items, active, onChange, onClickMinus, tooltipText }: CardAccordionDraggableProps) => JSX.Element;
export default CardAccordionDraggable;
