import type { StoryObj } from '@storybook/react';
import Timepicker, { TimepickerProps } from '.';
declare const meta: {
    title: string;
    component: ({ variant, placeholder, label, value, onChange, onBlur, hint, disabled, }: TimepickerProps) => JSX.Element;
    tags: string[];
    argTypes: {
        value: {
            description: string;
        };
        label: {
            control: string;
            description: string;
        };
        onChange: {
            description: string;
        };
        onBlur: {
            description: string;
        };
        placeholder: {
            control: string;
            description: string;
        };
        hint: {
            control: string;
            description: string;
        };
        variant: {
            control: string;
            options: string[];
            description: string;
        };
        disabled: {
            control: string;
            description: string;
        };
    };
    render: (args: TimepickerProps) => JSX.Element;
};
export default meta;
type Story = StoryObj<typeof Timepicker>;
export declare const Default: Story;
