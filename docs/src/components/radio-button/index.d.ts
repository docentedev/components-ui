export type RadioButtonProps = {
    id?: string;
    label?: string;
    size?: 's' | 'm';
    disabled?: boolean;
    checked?: boolean;
    onClick?: (checked: boolean) => void;
    readOnly?: boolean;
};
declare const RadioButton: ({ label, disabled, checked, onClick, id, size, readOnly, }: RadioButtonProps) => JSX.Element;
export default RadioButton;
