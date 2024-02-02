import type { StoryObj } from '@storybook/react';
import Card from '.';
declare const meta: {
    title: string;
    component: ({ children, size, variant, block }: import(".").CardProps) => JSX.Element;
    tags: string[];
    argTypes: {
        variant: {
            options: string[];
            control: {
                type: string;
            };
            defaultValue: string;
            description: string;
        };
        size: {
            options: string[];
            control: {
                type: string;
            };
            defaultValue: string;
            description: string;
        };
        children: {
            control: {
                type: string;
            };
            defaultValue: string;
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof Card>;
export declare const Default: Story;
