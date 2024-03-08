import { ReactNode } from "react";
export type CardProps = {
    size?: 'm' | 's' | 'xs';
    children: ReactNode | ReactNode[];
    variant?: 'border' | 'border-l' | '';
    block?: boolean;
    width?: string;
    padding?: '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl';
};
declare const Card: ({ children, size, variant, block, width, padding }: CardProps) => JSX.Element;
export default Card;
