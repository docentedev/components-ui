import { tokens } from '..';
export type SeparatorProps = {
    variant?: 'line' | 'space';
    height?: number | keyof typeof tokens.spacing;
};
declare const Separator: ({ variant, height }: SeparatorProps) => JSX.Element;
export default Separator;
