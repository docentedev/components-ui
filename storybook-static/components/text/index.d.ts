import { ReactNode } from 'react';
export type TextVariant = 'regular' | 'bold' | '' | 'regular-bold' | 'small' | 'small-bold' | 'description' | 'medium-bold' | 'body2' | 'subtitle' | 'subtitle1' | 'subtitle2' | 'accordion' | 'title-section' | 'modal' | 'tag' | 'silent';
export type TextProps = {
    variant?: TextVariant;
    tag?: keyof JSX.IntrinsicElements;
    children: ReactNode;
    color?: string;
    width?: string;
    [key: string]: string | unknown;
};
declare const Text: ({ variant, tag, children, color, width, ...restProps }: TextProps) => JSX.Element;
export default Text;
