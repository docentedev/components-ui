import { ColumnProps, ColumnStrictProps } from './index';
export declare function getValue<T>(row: T, column: ColumnStrictProps<T>, index: number): string | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | NonNullable<T>;
export declare function propsTransform<T>(columns: ColumnProps<T>[]): ColumnStrictProps<T>[];
export declare const tableSelectedRowStyle: string;
