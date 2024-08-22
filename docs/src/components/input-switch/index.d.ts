export type InputSwitchProps = {
    value: boolean;
    size?: 's' | 'm';
    disabled?: boolean;
    onChange?: (value: boolean) => void;
    readOnly?: boolean;
    type?: 'button' | 'submit' | 'reset';
};
declare const InputSwitch: ({ value, size, disabled, onChange, readOnly, type, }: InputSwitchProps) => JSX.Element;
export default InputSwitch;
