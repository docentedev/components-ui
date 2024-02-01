import { ReactNode } from "react";
export type CardProps = {
    size?: 'm' | 's' | 'xs';
    children: ReactNode | ReactNode[];
    variant?: 'border' | 'border-l' | '';
    block?: boolean;
};
declare const Card: ({ children, size, variant, block }: CardProps) => JSX.Element;
export default Card;
