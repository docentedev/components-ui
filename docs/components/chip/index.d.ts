import React, { ReactNode } from 'react';
import { IconProps } from '../icon';
export type TypeVariant = 'default' | 'outline' | 'primary' | 'secondary' | 'information' | 'success' | 'warning' | 'error' | 'disabled' | 'alternative1' | 'alternative2' | 'alternative3' | 'information-light';
export type TypeSize = 'xs' | 's' | 'm';
export interface PropTypes extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: TypeSize;
    text?: string | ReactNode | ReactNode[];
    variant?: TypeVariant;
    widthDot?: boolean;
    widthClose?: boolean;
    icon?: React.ReactElement<IconProps>;
    onClickClose?: () => void;
}
declare const Chip: (props: PropTypes) => JSX.Element;
export default Chip;
