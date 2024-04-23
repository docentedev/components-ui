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
            options: ("Category" | "Confetti" | "DropShipping" | "Easy" | "ExperienciaYservicios" | "Flex" | "Forbidden" | "Fullfilment" | "FulfillmentByParis" | "FulfillmentMarketplace" | "InternalServerError" | "LostClouds" | "MaintenanceError" | "NotFound" | "OpenBox" | "TimeCapsule" | "Truck" | "HappyOpenBox")[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof Illustration>;
export declare const Default: Story;
