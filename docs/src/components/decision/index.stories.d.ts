import type { StoryObj } from '@storybook/react';
import Decision from './index';
declare const meta: {
    title: string;
    component: ({ variant, onConfirm, onCancel, loading, disabled, textConfirm, textCancel, iconLeftConfirm, iconRightConfirm, iconLeftCancel, iconRightCancel, }: import("./index").DecisionProps) => JSX.Element;
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
        iconLeftCancel: {
            control: string;
            options: (string | undefined)[];
            description: string;
        };
        iconRightCancel: {
            control: string;
            options: (string | undefined)[];
            description: string;
        };
        iconLeftConfirm: {
            control: string;
            options: (string | undefined)[];
            description: string;
        };
        iconRightConfirm: {
            control: string;
            options: (string | undefined)[];
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof Decision>;
export declare const Default: Story;
