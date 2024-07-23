import useForm from '../../hooks/useForm';
import { Input, InputEmail, InputPassword, InputSwitch, Dropdown, DropdownCheckbox, Button } from '../';
export interface FormProps {
    children: React.ReactNode;
    onSubmit: (values: {
        [k: string]: FormDataEntryValue;
    }) => void;
}
export interface FormComponent {
    useForm: typeof useForm;
    Input: typeof Input;
    Email: typeof InputEmail;
    Password: typeof InputPassword;
    Switch: typeof InputSwitch;
    Dropdown: typeof Dropdown;
    DropdownCheckbox: typeof DropdownCheckbox;
    Button: typeof Button;
}
declare const Form: React.FC<FormProps> & FormComponent;
export default Form;
