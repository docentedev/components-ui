type DatepickerBaseProps = {
    label: string;
    value: Date | null;
    onChange: (value: Date | null) => void;
    placeholder?: string;
    variant?: 'default' | 'error';
    hint?: string;
    disabled?: boolean;
    onBlur?: () => void;
    onFocus?: (value: boolean) => void;
    min?: Date;
    max?: Date;
    onCommit?: (value: Date, mode?: 'MOVE') => void;
    open?: boolean;
    onToggle?: (value: boolean) => void;
    outRef?: any;
    size?: 's' | 'm';
};
export declare const DatepickerBase: ({ placeholder, value: valueDate, onChange: onChageOut, label, variant, hint, disabled, onBlur, onFocus, min, max, onCommit, open: outOpen, onToggle, outRef, size, }: DatepickerBaseProps) => JSX.Element;
export type DatepickerProps = {
    label: string;
    value: Date | null;
    onChange: (value: Date | null) => void;
    placeholder?: string;
    variant?: 'default' | 'error';
    hint?: string;
    disabled?: boolean;
    onBlur?: () => void;
    min?: Date;
    max?: Date;
    size?: 's' | 'm';
};
declare const Datepicker: (props: DatepickerProps) => JSX.Element;
export default Datepicker;
