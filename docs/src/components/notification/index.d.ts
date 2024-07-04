import { ReactNode } from 'react';
export type ItemEvents = {
    onClose: () => Promise<void>;
};
export type Data = {
    onClose?: (message: string) => void;
    persistent?: boolean;
    title?: string;
    description?: string;
    variant?: 'info' | 'success' | 'error' | 'warning';
    render?: (events: ItemEvents) => React.ReactElement | string;
    autoClose?: number;
    hiddenCloseButton?: boolean;
    theme?: 'default' | 'light';
    icon?: boolean | ReactNode | ReactNode[] | string | JSX.Element | JSX.Element[];
};
export type ItemProps = {
    data: Data;
};
declare const Notification: (props: {
    items: Data[];
}) => JSX.Element;
export default Notification;
