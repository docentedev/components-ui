import React from 'react';
export type ColumnProps<T = any> = {
    key?: string;
    label?: string;
    renderRow?: (row: T, index: number, onCollapse: (open?: boolean) => void) => React.ReactElement | string;
    renderHead?: (column: ColumnStrictProps<T>, index: number) => React.ReactElement;
    renderVoid?: (row: T, index: number) => React.ReactElement;
    sort?: {
        ascText: string;
        descText: string;
    };
    tdStyle?: React.CSSProperties;
};
export type ColumnStrictProps<T = any> = {
    key: string;
    label: string;
    internalKey: string;
    renderRow?: (row: T, index: number, onCollapse: (open?: boolean) => void) => React.ReactElement | string;
    renderHead?: (column: ColumnStrictProps<T>, index: number) => React.ReactElement;
    renderVoid?: (row: T, index: number) => React.ReactElement;
    isSort: boolean;
    sort?: {
        ascText: string;
        descText: string;
    };
    tdStyle?: React.CSSProperties;
};
export type TableProps<T = any> = {
    data: T[];
    loading?: boolean;
    columns: ColumnProps<T>[];
    onClickRow?: (row: T, key: string, value: any) => void;
    onSort?: (sort: 'asc' | 'desc', column: ColumnStrictProps<T>) => void;
    maxHeight?: string;
    multiCollapse?: boolean;
    variant?: 'default' | 'secondary' | 'striped' | 'bordered' | 'light' | 'narrow';
    className?: string;
    getClassNameRow?: (row: T, index: number) => string;
    withHeader?: boolean;
    onDragEnd?: (data: T[]) => void;
    renderCollapse?: (row: T, index: number) => React.ReactElement;
};
export type OrderState<T> = {
    column: ColumnStrictProps<T>;
    sort: 'asc' | 'desc';
};
declare function Table<T = any>({ data, loading, columns, onClickRow, onSort, maxHeight, variant, className, getClassNameRow, multiCollapse, withHeader, onDragEnd, renderCollapse, }: TableProps<T>): JSX.Element;
export default Table;
