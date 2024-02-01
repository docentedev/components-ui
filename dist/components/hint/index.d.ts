export type HintProps = {
    variant?: 'default' | 'success' | 'error' | 'warning';
    children: string;
};
declare const Hint: ({ children, variant }: HintProps) => JSX.Element;
export default Hint;
