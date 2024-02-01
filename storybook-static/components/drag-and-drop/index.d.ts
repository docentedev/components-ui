import React from 'react';
export type Item<T> = {
    id: number;
    data: T;
};
type DragAndDropBaseProps<T> = {
    data: Item<T>[];
    onChange: (data: Item<T>[]) => void;
    onEnd?: (data: T[]) => void;
    renderData: (item: T, index: number) => React.ReactElement;
    table?: boolean;
    getClassNameRow?: (row: T, index: number) => string;
};
export declare function DragAndDropBase<T>(props: DragAndDropBaseProps<T>): JSX.Element;
type DragAndDropProps<T> = {
    renderData: (item: T, index: number) => React.ReactElement;
    data: T[];
    onChange?: (data: T[]) => void;
    onEnd?: (data: T[]) => void;
};
export default function DragAndDrop<T>(props: DragAndDropProps<T>): JSX.Element;
type DragAndDropTableProps<T> = {
    renderData: (item: T, index: number) => React.ReactElement;
    data: T[];
    onChange: (data: T[]) => void;
    onEnd?: (data: T[]) => void;
    table?: boolean;
    getClassNameRow?: (row: T, index: number) => string;
};
export declare function DragAndDropTable<T>(props: DragAndDropTableProps<T>): JSX.Element;
export {};
