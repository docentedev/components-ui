import { IconProps } from '../icon';
type CheckboxProps = {
    checked: boolean;
    onChange: (checked: boolean, value?: string | number) => void;
    label: string;
    value?: string | number;
    variant?: 'light';
    icon?: React.ReactElement<IconProps>;
    disabled?: boolean;
};
declare const Checkbox: ({ checked, onChange, label, value, variant, icon, disabled }: CheckboxProps) => JSX.Element;
export default Checkbox;
