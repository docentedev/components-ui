import type { Meta, StoryObj } from '@storybook/react';
import DelayTrafficLight, { DelayTrafficLightProps } from './index';
declare const meta: Meta<typeof DelayTrafficLight>;
declare const Component: (props: DelayTrafficLightProps) => JSX.Element;
type Story = StoryObj<typeof Component>;
export default meta;
export declare const Default: Story;
