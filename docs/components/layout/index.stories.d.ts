import type { StoryObj } from '@storybook/react';
import Layout from '.';
declare const meta: {
    title: string;
    component: ({ children }: import(".").LayoutProps) => JSX.Element;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof Layout>;
export declare const Default: Story;
