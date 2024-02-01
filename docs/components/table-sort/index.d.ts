import { OrderState } from '../table-draggable/index.utils';
import { ColumnStrictProps } from '../table';
type SortProps<T = any> = {
    ascText: string;
    descText: string;
    onSortClick: (sort: 'asc' | 'desc') => void;
    orderState: OrderState | undefined;
    column: ColumnStrictProps<T>;
};
declare function TableSort<T>({ ascText, descText, onSortClick, orderState, column, }: SortProps<T>): JSX.Element;
export default TableSort;
