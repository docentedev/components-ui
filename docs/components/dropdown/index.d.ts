export type Option = {
    value: string;
    label: string;
    persistent?: boolean;
    disabled?: boolean;
};
export type DropdownProps = {
    label: string;
    value: string;
    onChange: (key: string, name?: string) => void;
    onClose?: () => void;
    options: Option[];
    direction?: 'top' | 'bottom';
    variant?: 'default' | 'success' | 'error' | 'warning';
    hint?: string;
    disabled?: boolean;
    onOpen?: (value: boolean) => void;
    name?: string;
};
declare const Dropdown: ({ label, options, value, onChange, onClose, variant, direction, hint, disabled, onOpen, name, }: DropdownProps) => JSX.Element;
export default Dropdown;
