import { OptionsOption } from '../options';
export type DropdownProps = {
    label: string;
    value: string;
    onChange: (key: string, name?: string) => void;
    onClose?: () => void;
    options: OptionsOption[];
    direction?: 'top' | 'bottom';
    variant?: 'default' | 'success' | 'error' | 'warning';
    hint?: string;
    disabled?: boolean;
    onOpen?: (value: boolean) => void;
    name?: string;
    onInput?: (value: string) => void;
    loading?: boolean;
};
declare const Dropdown: ({ label, options, value, onChange, onClose, variant, direction, hint, disabled, onOpen, name, onInput, loading, }: DropdownProps) => JSX.Element;
export default Dropdown;
