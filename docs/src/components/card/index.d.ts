import { ReactNode } from "react";
import { tokens } from "..";
export type CardProps = {
    /**
     * @deprecated
     * DEPRECATED. Use `padding` instead.
     */
    size?: 'm' | 's' | 'xs';
    children: ReactNode | ReactNode[];
    variant?: 'border' | 'border-l' | '';
    block?: boolean;
    width?: string;
    padding?: keyof typeof tokens.spacing;
};
declare const Card: ({ children, size, variant, block, width, padding }: CardProps) => JSX.Element;
export default Card;
