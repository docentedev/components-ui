import { ChangeEvent, FocusEvent } from 'react';
export type InputEmailProps = {
    label: string;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    value: string;
    hint: string;
    hintInvalid: string;
    hintRequired: string;
    onError: (error: boolean) => void;
    variant?: 'error' | 'default';
    name?: string;
};
declare const InputEmail: ({ label, placeholder, onChange, onBlur, value, hint, hintInvalid, hintRequired, onError, name, variant, }: InputEmailProps) => JSX.Element;
export default InputEmail;
