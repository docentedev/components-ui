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
export type TabsProps = {
    tabs: Tab[];
    onChange?: (index: number) => void;
    variant?: 'primary' | 'secondary';
    index?: number;
    hiddenLine?: boolean;
    strechItems?: boolean;
    borderRadius?: number | string;
};
/**
 * The `Tabs` component creates a tabbed interface with scrollable tabs.
 */
declare function Tabs({ tabs, onChange, variant, index, strechItems, borderRadius, hiddenLine, }: TabsProps): JSX.Element;
export default Tabs;
