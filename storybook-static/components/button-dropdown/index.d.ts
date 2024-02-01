export type ButtonDropdownOption = {
    icon: string;
    title: string;
    text: string;
    key?: string;
};
export type ButtonDropdownProps = {
    options: ButtonDropdownOption[];
    label: string;
    onChange: (value: string | number) => void;
    position?: "left" | "right" | "bottom";
};
declare const ButtonDropdown: (props: ButtonDropdownProps) => JSX.Element;
export default ButtonDropdown;
