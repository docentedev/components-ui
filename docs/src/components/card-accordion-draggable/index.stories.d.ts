import type { Meta, StoryObj } from '@storybook/react';
import CardAccordionDraggable from './index';
declare const meta: Meta<typeof CardAccordionDraggable>;
export type Data = {
    name: string;
    age: number;
    email: string;
    city: string;
    country: string;
    occupation: string;
    salary: number;
    status: string;
};
type Story = StoryObj<typeof CardAccordionDraggable>;
export default meta;
export declare const Default: Story;
