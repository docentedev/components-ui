export type Size = 's' | 'm' | 'l';
export type Variant = 'image' | 'initials' | 'icon';
export type AvatarProps = {
    title: string;
    subtitle?: string;
    size: Size;
    hiddenText?: boolean;
    imageSrc?: string;
    variant?: Variant;
};
declare const Avatar: ({ title, subtitle, hiddenText, imageSrc, variant, }: AvatarProps) => JSX.Element;
export default Avatar;
