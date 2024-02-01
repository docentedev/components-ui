import type { Meta, StoryObj } from '@storybook/react';
import TableDraggable from '.';
declare const meta: Meta<typeof TableDraggable>;
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
type Story = StoryObj<typeof TableDraggable>;
export default meta;
export declare const Default: Story;
