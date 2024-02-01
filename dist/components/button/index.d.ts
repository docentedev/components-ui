import React from 'react';
import { IconProps } from '../icon/';
export type ButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode | React.ReactNode[];
    size?: 's' | 'xs' | 'm' | 'l';
    disabled?: boolean;
    icon?: React.ReactElement<IconProps>;
    iconLeft?: React.ReactElement<IconProps>;
    iconRight?: React.ReactElement<IconProps>;
    type?: 'submit' | 'button';
    variant?: 'primary' | 'secondary' | 'ternary' | 'dashed' | 'toggle' | 'light';
    block?: boolean;
    loading?: boolean;
    onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
declare const Button: ({ onClick, children, size, disabled, icon, iconLeft, iconRight, type, variant, block, loading, onMouseEnter, onMouseLeave, }: ButtonProps) => JSX.Element;
export default Button;
