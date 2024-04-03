import React from 'react';
export type Step = {
    label: string | number | JSX.Element | JSX.Element[] | null | undefined | React.ReactNode | React.ReactNode[];
    content: React.ReactNode;
    disabled?: boolean;
};
export type StepperProps = {
    current: number;
    steps: Step[];
    onChange?: (current: number) => void;
    collapsable?: boolean;
    variant?: 'horizontal' | 'vertical';
};
declare function Stepper({ steps, current, onChange, collapsable, variant }: StepperProps): JSX.Element;
export default Stepper;
