import type { StoryObj } from '@storybook/react';
import Decision from './index';
declare const meta: {
    title: string;
    component: ({ variant, onConfirm, onCancel, loading, disabled, textConfirm, textCancel, }: import("./index").DecisionProps) => JSX.Element;
    tags: string[];
    argTypes: {
        variant: {
            control: string;
            options: string[];
            description: string;
        };
        disabled: {
            control: string;
            description: string;
        };
        loading: {
            control: string;
            description: string;
        };
        textConfirm: {
            control: string;
            description: string;
        };
        textCancel: {
            control: string;
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof Decision>;
export declare const Default: Story;
