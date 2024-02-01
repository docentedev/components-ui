import React from 'react';
/**
 * Represents a single Step in the `Stepper` component.
 */
export type Step = {
    label: string | number | JSX.Element | JSX.Element[] | null | undefined | React.ReactNode | React.ReactNode[];
    content: React.ReactNode;
    disabled?: boolean;
};
/**
 * Props for the `Stepper` component.
 */
export type StepperProps = {
    current: number;
    steps: Step[];
    onChange?: (current: number) => void;
    collapsable?: boolean;
    variant?: 'horizontal' | 'vertical';
};
/**
 * The `Stepper` component create an stepper view.
 */
declare function Stepper({ steps, current, onChange, collapsable, variant }: StepperProps): JSX.Element;
export default Stepper;
