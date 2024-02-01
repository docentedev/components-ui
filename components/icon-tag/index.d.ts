import React from 'react';
import { IconProps } from '../icon';
type IconTagProps = {
    icon: React.ReactElement<IconProps>;
    bgColor: string;
    color: string;
};
declare const IconTag: ({ icon, bgColor, color }: IconTagProps) => JSX.Element;
export default IconTag;
