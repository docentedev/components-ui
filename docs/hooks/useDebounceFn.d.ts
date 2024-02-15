type DebounceFn = (value: string) => void;
declare const useDebounceFn: (fn: DebounceFn, delay: number) => (value: string) => void;
export default useDebounceFn;
