export type DropdownCheckboxOption = {
    checked: boolean;
    value: any;
    label: string;
};
export type DropdownCheckboxChipsProps = {
    options: DropdownCheckboxOption[];
    onChange: (option: DropdownCheckboxOption[], name?: string) => void;
    onClose?: () => void;
    textSelectAll: string;
    label: string;
    variant?: 'default' | 'error';
    hint?: string;
    disabled?: boolean;
    width?: string;
    name?: string;
    type?: 'button' | 'submit' | 'reset';
    maxVisibleChips?: number;
    defaultInitialText?: string;
    plusSign?: string;
};
declare const DropdownCheckboxChips: ({ options, onChange, onClose, textSelectAll, defaultInitialText, label, variant, hint, disabled, width, name, type, plusSign, maxVisibleChips, }: DropdownCheckboxChipsProps) => JSX.Element;
export default DropdownCheckboxChips;
