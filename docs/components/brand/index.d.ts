import brands from './brands';
export type PointerEvents = 'auto' | 'none' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'fill' | 'stroke' | 'all' | 'inherit';
export type BrandProps = {
    pointerEvents?: PointerEvents;
    size?: number;
    name?: keyof typeof brands;
};
declare const Brand: ({ size, pointerEvents, name, }: BrandProps) => JSX.Element;
export default Brand;
