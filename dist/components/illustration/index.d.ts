import Illustrations from './ilustrations';
export type PointerEvents = 'auto' | 'none' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'fill' | 'stroke' | 'all' | 'inherit';
export type IllustrationProps = {
    pointerEvents?: PointerEvents;
    size?: number;
    name?: keyof typeof Illustrations;
};
declare const Illustration: ({ size, pointerEvents, name, }: IllustrationProps) => JSX.Element;
export default Illustration;
