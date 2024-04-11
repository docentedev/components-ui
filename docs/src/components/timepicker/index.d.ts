export type TimepickerProps = {
    placeholder?: string;
    label?: string;
    value: string;
    onChange: (time: string) => void;
    onBlur?: () => void;
    hint?: string;
    variant?: 'default' | 'success' | 'error' | 'warning';
    disabled?: boolean;
};
declare const Timepicker: ({ variant, placeholder, label, value, onChange, onBlur, hint, disabled, }: TimepickerProps) => JSX.Element;
export default Timepicker;
