export type PaginationProps = {
    onPage: (page: number) => void;
    onNext: () => void;
    onBack: () => void;
    onPageSize: (pageSize: number) => void;
    isFirst: boolean;
    numberOfElements: number;
    page: number;
    isLast: boolean;
    pageSize: number;
    totalElements: number;
    totalPages: number;
    variant?: 'alternative' | 'minimum';
    resumeText?: string;
    pageText?: string;
};
declare const Pagination: (props: PaginationProps) => JSX.Element;
export default Pagination;
