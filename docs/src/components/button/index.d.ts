import React from 'react';
import { IconProps } from '../icon/';
import Icons from '../icon/icons';
export type ButtonVariant = 'primary' | 'secondary' | 'ternary' | 'dashed' | 'toggle' | 'light';
export type ButtonSize = 's' | 'xs' | 'm' | 'l';
export type ButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode | React.ReactNode[];
    size?: ButtonSize;
    disabled?: boolean;
    icon?: keyof typeof Icons | React.ReactElement<IconProps>;
    iconLeft?: keyof typeof Icons | React.ReactElement<IconProps>;
    iconRight?: keyof typeof Icons | React.ReactElement<IconProps>;
    type?: 'submit' | 'button';
    variant?: ButtonVariant;
    block?: boolean;
    loading?: boolean;
    onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    [key: string]: unknown;
    bullet?: number;
};
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
