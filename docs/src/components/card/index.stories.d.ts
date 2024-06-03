import type { StoryObj } from '@storybook/react';
import { Card } from '../';
declare const meta: {
    title: string;
    component: ({ children, size, variant, block, width, padding, borderRadius }: import(".").CardProps) => JSX.Element;
    tags: string[];
    argTypes: {
        variant: {
            options: string[];
            control: {
                type: string;
            };
            value: string;
            description: string;
        };
        children: {
            control: {
                type: string;
            };
            value: string;
            description: string;
        };
        padding: {
            control: {
                type: string;
            };
            options: string[];
            value: string;
            description: string;
        };
        borderRadius: {
            control: {
                type: string;
            };
            value: string;
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof Card>;
export declare const Default: Story;
