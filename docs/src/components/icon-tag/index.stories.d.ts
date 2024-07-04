import { StoryObj } from '@storybook/react';
import IconTag from '.';
declare const meta: {
    title: string;
    component: ({ icon, bgColor, color }: {
        icon: import("react").ReactElement<import("../icon").IconProps, string | import("react").JSXElementConstructor<any>>;
        bgColor: string;
        color: string;
    }) => JSX.Element;
    tags: string[];
    argTypes: {
        icon: {
            control: {
                type: null;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof IconTag>;
export declare const Default: Story;
