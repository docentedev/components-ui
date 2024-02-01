type Option = {
    label: string;
    value: string;
};
export type ListProps = {
    options: Option[];
    onChange: (value: string) => void;
    value: string;
    unselectedText?: string;
    width?: string;
};
declare const List: ({ options, onChange, value, unselectedText, width, }: ListProps) => JSX.Element;
export default List;
