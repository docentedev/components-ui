import { ColumnStrictProps, OrderState } from "../table";
type TableHeadProps<T> = {
    columns: ColumnStrictProps<T>[];
    onSort?: (sort: 'asc' | 'desc', column: ColumnStrictProps<T>) => void;
    orderState: OrderState<T> | undefined;
};
declare function TableHead<T>({ columns, onSort, orderState }: TableHeadProps<T>): JSX.Element;
export default TableHead;
