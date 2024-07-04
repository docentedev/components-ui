import React from 'react';
import Icons from '../icon/icons';
import { ButtonSize } from '../button';
import { ChipProps } from '../chip';
export type OptionsOption = {
    value: string;
    label: string;
    persistent?: boolean;
    disabled?: boolean;
    icon?: keyof typeof Icons | JSX.Element | null;
    chip?: React.ReactElement<ChipProps> | null;
};
type OptionsProps = {
    open: boolean;
    onClick: (option: OptionsOption) => () => void;
    value: string;
    options: OptionsOption[];
    getFinded?: (option: OptionsOption) => boolean;
    variant?: 'menu';
    size?: ButtonSize;
};
declare const Options: React.ForwardRefExoticComponent<OptionsProps & React.RefAttributes<HTMLDivElement>>;
export default Options;
