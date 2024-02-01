import { ChangeEvent, FocusEvent } from 'react';
export type InputPhoneProps = {
    label: string;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    value: string;
    hint: string;
    hintInvalid: string;
    hintRequired: string;
    onError: (error: boolean) => void;
    name?: string;
};
declare const InputPhone: ({ label, placeholder, onChange, onBlur, value, hint, hintInvalid, hintRequired, onError, name, }: InputPhoneProps) => JSX.Element;
export default InputPhone;
