export type DropdownCheckboxOption = {
    checked: boolean;
    value: any;
    label: string;
};
type DropdownCheckboxProps = {
    options: DropdownCheckboxOption[];
    onChange: (option: DropdownCheckboxOption[], name?: string) => void;
    onClose?: () => void;
    textSelectAll: string;
    textCountSelected: string;
    textCountSelectedOne?: string;
    label: string;
    searchable?: boolean;
    variant?: 'default' | 'error';
    hint?: string;
    disabled?: boolean;
    width?: string;
    name?: string;
    type?: 'button' | 'submit' | 'reset';
    maxSelections?: number;
    selectOnlyFiltered?: boolean;
};
declare const DropdownCheckbox: ({ options, onChange, onClose, textSelectAll, textCountSelected, textCountSelectedOne, label, searchable, variant, hint, disabled, width, name, type, maxSelections, selectOnlyFiltered, }: DropdownCheckboxProps) => JSX.Element;
export default DropdownCheckbox;
