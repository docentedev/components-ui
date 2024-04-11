export type ImageProps = {
    src: string;
    title?: string;
    variant?: 'thumbnail';
    onClick?: () => void;
    width?: string;
    height?: string;
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
};
declare const Image: ({ src, title, variant, onClick, width, height, objectFit }: ImageProps) => JSX.Element;
export default Image;
