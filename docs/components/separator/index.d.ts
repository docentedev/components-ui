export type SeparatorProps = {
    variant?: 'line' | 'space';
    height?: number | '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl';
};
declare const Separator: ({ variant, height }: SeparatorProps) => JSX.Element;
export default Separator;
