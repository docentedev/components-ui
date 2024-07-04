import { FocusEvent, ChangeEvent } from 'react';
export type InputElement = HTMLInputElement | HTMLTextAreaElement;
export type InputProps = {
    onFocus?: (e: FocusEvent<InputElement>) => void;
    onChange: (e: ChangeEvent<InputElement>) => void;
    onBlur?: (event: FocusEvent<InputElement>) => void;
    label?: string;
    value?: string | number;
    variant?: 'default' | 'error';
    name?: string;
    placeholder?: string;
    disabled?: boolean;
    maxLength?: number;
    iconVariant?: 'outline' | 'filled';
    hint?: string;
    hintRequired?: string;
    hintInvalid?: string;
    onError?: (error: boolean) => void;
};
declare const InputPassword: ({ onChange, label, value, hint, variant, name, placeholder, disabled, maxLength, iconVariant, hintRequired, hintInvalid, onError }: InputProps) => JSX.Element;
export default InputPassword;