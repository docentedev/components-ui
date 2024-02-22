import { ReactNode } from "react";
export type CardProps = {
    size?: 'm' | 's' | 'xs';
    children: ReactNode | ReactNode[];
    variant?: 'border' | 'border-l' | '';
    block?: boolean;
    width?: string;
};
declare const Card: ({ children, size, variant, block, width }: CardProps) => JSX.Element;
export default Card;
