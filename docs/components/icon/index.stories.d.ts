import type { StoryObj } from "@storybook/react";
import Icon, { IconProps } from ".";
declare const meta: {
    title: string;
    component: ({ color, size, pointerEvents, name, animation, variant, }: IconProps) => JSX.Element;
    tags: string[];
    argTypes: {
        size: {
            control: {
                type: string;
                min: number;
                max: number;
                step: number;
            };
        };
        name: {
            options: string[];
            control: {
                type: string;
            };
        };
        color: {
            control: {
                type: string;
            };
        };
        variant: {
            options: string[];
            control: {
                type: string;
            };
        };
        animation: {
            options: string[];
            control: {
                type: string;
            };
        };
    };
    render: (args: IconProps) => JSX.Element;
};
export default meta;
type Story = StoryObj<typeof Icon>;
export declare const Default: Story;
