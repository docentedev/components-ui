import React, { FocusEvent, ChangeEvent } from 'react';
import { IconProps } from '../icon';
export type InputElement = HTMLInputElement | HTMLTextAreaElement;
export type InputProps = {
    onFocus?: (e: FocusEvent<InputElement>) => void;
    onChange: (e: ChangeEvent<InputElement>) => void;
    onBlur?: (event: FocusEvent<InputElement>) => void;
    label?: string;
    value?: string | number;
    type?: string;
    hint?: string;
    variant?: 'default' | 'success' | 'error' | 'warning';
    htmlFor?: string;
    id?: string;
    name?: string;
    iconRight?: React.ReactElement<IconProps>;
    iconRightError?: React.ReactElement<IconProps>;
    placeholder?: string;
    disabled?: boolean;
    maxLength?: number;
    size?: 's' | 'm';
    iconRightOnClick?: () => void;
};
declare const Input: ({ onFocus, onChange, onBlur, label, value, type, hint, variant, htmlFor, id, name, iconRight, iconRightError, placeholder, disabled, maxLength, size, iconRightOnClick, }: InputProps) => JSX.Element;
export default Input;
