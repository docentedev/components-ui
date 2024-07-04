import type { Meta, StoryObj } from '@storybook/react';
import { VerticalTableProps } from '.';
import { VerticalTable } from '../index';
declare const meta: Meta<typeof VerticalTable>;
declare const Story: (args: VerticalTableProps) => JSX.Element;
type Story = StoryObj<typeof Image>;
export default meta;
export declare const Default: Story;
