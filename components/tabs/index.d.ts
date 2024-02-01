import React from 'react';
/**
 * Represents a single tab in the `Tabs` component.
 */
type Tab = {
    label: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
    badge?: string;
    disabled?: boolean;
};
/**
 * Props for the `Tabs` component.
 */
export type TabsProps = {
    tabs: Tab[];
    onChange?: (index: number) => void;
    variant?: 'primary' | 'secondary';
};
/**
 * The `Tabs` component creates a tabbed interface with scrollable tabs.
 */
declare function Tabs({ tabs, onChange, variant, }: TabsProps): JSX.Element;
export default Tabs;
