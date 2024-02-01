import { ReactNode } from 'react';
export type AlertProps = {
    theme?: 'default' | 'light';
    variant?: 'info' | 'success' | 'error' | 'warning';
    title?: string;
    icon?: boolean | ReactNode | ReactNode[] | string | JSX.Element | JSX.Element[];
    children?: ReactNode | ReactNode[] | string | JSX.Element | JSX.Element[];
    onClose?: () => void;
};
declare const Alert: ({ variant, title, children, icon, onClose, theme, }: AlertProps) => JSX.Element;
export default Alert;
