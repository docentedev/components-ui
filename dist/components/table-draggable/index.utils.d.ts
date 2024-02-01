import { ColumnProps, ColumnStrictProps } from './index';
export declare const getValue: (row: any, column: ColumnStrictProps, index: number) => any;
export declare const propsTransform: (columns: ColumnProps[]) => ColumnStrictProps[];
export declare const getDotValue: (row: any, key: string) => any;
export type OrderState = {
    column: ColumnStrictProps;
    sort: 'asc' | 'desc';
};
