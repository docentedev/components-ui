import React, { ReactNode } from 'react';
import { IconProps } from '../icon';
export type TypeVariant = 'default' | 'outline' | 'secondary-outline' | 'primary' | 'secondary' | 'information' | 'success' | 'warning' | 'error' | 'disabled' | 'alternative1' | 'alternative2' | 'alternative3' | 'information-light';
export type TypeSize = 'xs' | 's' | 'm';
export type ChipProps = {
    size?: TypeSize;
    text?: string | ReactNode | ReactNode[];
    variant?: TypeVariant;
    widthDot?: boolean;
    widthClose?: boolean;
    icon?: React.ReactElement<IconProps>;
    iconColor?: string;
    onClickClose?: () => void;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    [key: string]: string | boolean | ReactNode | ReactNode[];
};
declare const Chip: (props: ChipProps) => JSX.Element;
export default Chip;
