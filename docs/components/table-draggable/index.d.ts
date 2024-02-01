import React from 'react';
export type ColumnProps = {
    key?: string;
    label?: string;
    renderRow?: (row: any, index: number) => any;
    renderVoid?: (row: any, index: number) => any;
    sort?: {
        ascText: string;
        descText: string;
    };
    tdStyle?: React.CSSProperties;
};
export type ColumnStrictProps = {
    key: string;
    label: string;
    internalKey: string;
    renderRow?: (row: any, index: number) => any;
    renderVoid?: (row: any, index: number) => any;
    isSort: boolean;
    sort?: {
        ascText: string;
        descText: string;
    };
    tdStyle?: React.CSSProperties;
};
export type TableProps = {
    data: any[];
    loading?: boolean;
    columns: ColumnProps[];
    onClickRow?: (row: any, key: string, value: any) => void;
    onSort?: (sort: 'asc' | 'desc', column: ColumnStrictProps) => void;
    maxHeight?: string;
    variant?: 'default' | 'secondary';
    className?: string;
    getClassNameRow?: (row: any, index: number) => string;
    onChange: <T>(e: T) => void;
};
/**
 *
 * @example ```tsx
 * <TableDD
            columns={[{ key: 'user.name' }]}
            data={[{ user: { name: 'Claudio' } }]}
            loading={false}
            onClickRow={console.log}
        />
        ```
 */
declare const TableDraggable: ({ data, loading, columns, onClickRow, onSort, maxHeight, variant, className, getClassNameRow, onChange }: TableProps) => JSX.Element;
export default TableDraggable;
