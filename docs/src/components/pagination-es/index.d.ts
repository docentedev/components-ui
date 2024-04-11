export type PaginationEsProps = {
    from: number;
    size: number;
    total: number;
    currentRow: number;
    onPage: (page: number) => void;
    onNext: () => void;
    onBack: () => void;
    onPageSize: (pageSize: number) => void;
};
declare const PaginationEs: (props: PaginationEsProps) => JSX.Element;
export default PaginationEs;
