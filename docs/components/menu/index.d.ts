import Icons from '../icon/icons';
import { ButtonSize, ButtonVariant } from '../button';
import { ChipProps } from '../chip';
export type Option = {
    label: string;
    value: string;
    icon?: keyof typeof Icons;
    disabled?: boolean;
    chip?: React.ReactElement<ChipProps> | null;
};
export type MenuProps = {
    options: Option[];
    onChange: (value: string) => void;
    value: string;
    buttonIcon: keyof typeof Icons;
    buttonVariant?: ButtonVariant;
    buttonSize?: ButtonSize;
    buttonBullet?: number;
};
declare const Menu: ({ options, onChange, buttonIcon, buttonVariant, buttonSize, buttonBullet, }: MenuProps) => JSX.Element;
export default Menu;
