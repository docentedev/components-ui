import { StoryObj } from '@storybook/react';
import Illustration from '.';
declare const meta: {
    title: string;
    component: ({ size, pointerEvents, name, }: import(".").IllustrationProps) => JSX.Element;
    argTypes: {
        pointerEvents: {
            control: {
                type: string;
            };
            options: string[];
        };
        size: {
            control: {
                type: string;
                min: number;
                max: number;
            };
        };
        name: {
            control: {
                type: string;
            };
            options: ("Category" | "Confetti" | "Forbidden" | "InternalServerError" | "LostClouds" | "MaintenanceError" | "NotFound" | "OpenBox" | "TimeCapsule" | "Truck")[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof Illustration>;
export declare const Default: Story;
