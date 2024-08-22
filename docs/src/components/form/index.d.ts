import useForm from '../../hooks/useForm';
import Button from '../button';
import Dropdown from '../dropdown';
import DropdownCheckbox from '../dropdown-checkbox';
import Input from '../input';
import InputEmail from '../input-email';
import InputPassword from '../input-password';
import InputSwitch from '../input-switch';
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
