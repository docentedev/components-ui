export type SkeletonProps = {
    width?: string;
    height?: string;
    color?: string;
    lines?: number;
    gap?: number;
    direction?: 'row' | 'column';
    wrap?: 'wrap' | 'nowrap';
};
declare const Skeleton: ({ width, height, color, gap, lines, direction, wrap }: SkeletonProps) => JSX.Element;
export default Skeleton;
