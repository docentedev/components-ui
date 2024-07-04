import type { StoryObj } from '@storybook/react';
import DisplayComment from './index';
declare const meta: {
    title: string;
    component: ({ body, footer }: {
        body?: string | undefined;
        footer?: string | undefined;
    }) => JSX.Element;
    tags: string[];
    argTypes: {
        body: {
            control: string;
        };
        footer: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof DisplayComment>;
export declare const Default: Story;
