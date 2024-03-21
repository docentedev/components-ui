import { ReactNode } from 'react';
export type TextProps = {
    weight?: 400 | 600 | 700 | null | number | string;
    tag?: keyof JSX.IntrinsicElements;
    children: ReactNode;
    color?: 'darken' | 'dark' | 'light' | null | string;
    size?: 12 | 14 | 16 | 18 | 24 | null | number | string;
    underline?: boolean;
    lineHeight?: number | string;
};
declare const Text: ({ weight, tag, children, color, size, underline, lineHeight, }: TextProps) => JSX.Element;
export default Text;
