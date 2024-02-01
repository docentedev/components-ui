import type { StoryObj } from "@storybook/react";
import Separator from ".";
declare const meta: {
    title: string;
    component: ({ variant, height }: import(".").SeparatorProps) => JSX.Element;
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
        height: {
            control: {
                type: string;
            };
            defaultValue: number;
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof Separator>;
export declare const Default: Story;
