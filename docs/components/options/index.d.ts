import React from 'react';
import Icons from '../icon/icons';
export type OptionsOption = {
    value: string;
    label: string;
    persistent?: boolean;
    disabled?: boolean;
    icon?: keyof typeof Icons;
};
type OptionsProps = {
    open: boolean;
    onClick: (option: OptionsOption) => () => void;
    value: string;
    options: OptionsOption[];
    getFinded?: (option: OptionsOption) => boolean;
    variant?: 'menu';
};
declare const Options: React.ForwardRefExoticComponent<OptionsProps & React.RefAttributes<HTMLDivElement>>;
export default Options;
