import Icons from '../icon/icons';
export type Option = {
    label: string;
    value: string;
    icon?: keyof typeof Icons;
    disabled?: boolean;
};
export type MenuProps = {
    options: Option[];
    onChange: (value: string) => void;
    value: string;
    buttonIcon: keyof typeof Icons;
};
declare const Menu: ({ options, onChange, buttonIcon, }: MenuProps) => JSX.Element;
export default Menu;
