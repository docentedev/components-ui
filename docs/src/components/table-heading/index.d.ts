import { ColumnStrictProps, OrderState } from '../table';
type THProps<T> = {
    column: ColumnStrictProps<T>;
    onSortClick: (sort: 'asc' | 'desc') => void;
    orderState: OrderState<T> | undefined;
    index: number;
};
declare function TableHeading<T>({ column, onSortClick, orderState, index }: THProps<T>): JSX.Element;
export default TableHeading;
