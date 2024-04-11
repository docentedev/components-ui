import { OptionsOption } from '../options';
export type InputPresetProps = {
    options: OptionsOption[];
    value: {
        key: string;
        value: string;
    };
    onChange: (key: string, value: string) => void;
    label: string;
    placeholder: string;
    debounceDelay?: number;
    disabled?: boolean;
    name?: string;
};
declare const InputPreset: ({ options, label, placeholder, onChange, value, debounceDelay, name, disabled, }: InputPresetProps) => JSX.Element;
export default InputPreset;
