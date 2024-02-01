export type VerticalTableData = {
    label: string | number | JSX.Element | JSX.Element[] | null | undefined;
    value: string | number | JSX.Element | JSX.Element[] | null | undefined;
};
export type VerticalTableProps = {
    data: VerticalTableData[];
};
declare const VerticalTable: ({ data }: VerticalTableProps) => JSX.Element;
export default VerticalTable;
