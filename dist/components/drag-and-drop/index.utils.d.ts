import { Item } from '.';
export declare const reorder: <T>(array: Item<T>[], originIndex: number, targetIndex: number) => Item<T>[];
type useDataStateProps<T> = {
    data: T[];
    onChange?: (data: T[]) => void;
};
export declare function useDataState<T>(props: useDataStateProps<T>): {
    internalData: Item<T>[];
    handleChange: (items: Item<T>[]) => void;
};
export {};
