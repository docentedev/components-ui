export type ImageProps = {
    src: string;
    title?: string;
    variant?: 'thumbnail';
    onClick?: () => void;
};
declare const Image: ({ src, title, variant, onClick }: ImageProps) => JSX.Element;
export default Image;
