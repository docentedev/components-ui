import { Item } from '..';
type DragItemProps<T> = {
    index: number;
    children: React.ReactElement;
    dragging: number | null;
    handleDragEnter: (ev: React.DragEvent<HTMLDivElement>) => void;
    handleDragLeave: (ev: React.DragEvent<HTMLDivElement>) => void;
    handleDragStart: (ev: React.DragEvent<HTMLDivElement>) => void;
    handleDrop: (ev: React.DragEvent<HTMLDivElement>) => void;
    handleDragEnd: (ev: React.DragEvent<HTMLDivElement>) => void;
    table?: boolean;
    getClassNameRow?: (row: T, index: number) => string;
    item: Item<T>;
};
export declare function DragItem<T>(props: DragItemProps<T>): JSX.Element;
export {};
