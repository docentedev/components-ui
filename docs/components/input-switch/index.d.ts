export type InputSwitchProps = {
    value: boolean;
    size?: 's' | 'm';
    disabled?: boolean;
    onChange: (value: boolean) => void;
    readOnly?: boolean;
};
declare const InputSwitch: ({ value, size, disabled, onChange, readOnly, }: InputSwitchProps) => JSX.Element;
export default InputSwitch;
