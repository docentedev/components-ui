import Icons from '../icon/icons';
import { Option } from '../dropdown';
export type DropdownAsyncProps = {
    getOptions: (query: string) => Promise<Option[]>;
    onChange?: (item: Option) => void;
    placeholder?: string;
    label?: string;
    disabled?: boolean;
    iconName?: keyof typeof Icons;
    textNoResults?: string;
    value?: Option | null;
    name?: string;
    variant?: 'default' | 'success' | 'error' | 'warning';
};
declare const DropdownAsync: (props: DropdownAsyncProps) => JSX.Element | null;
export default DropdownAsync;
