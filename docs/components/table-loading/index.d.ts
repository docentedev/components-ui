import { ColumnStrictProps } from '../table';
type LoadingProps<T> = {
    loading: boolean;
    children: any;
    columns: ColumnStrictProps<T>[];
};
declare function TableLoading<T>({ loading, children, columns }: LoadingProps<T>): any;
export default TableLoading;
