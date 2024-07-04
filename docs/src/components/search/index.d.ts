export type SearchProps = {
    onChange: (value: string) => void;
    value: string;
    placeholder: string;
    hint?: string;
    hintTyping?: string;
    debounce?: number;
    size?: 's' | 'm';
};
declare const Search: ({ onChange, value, placeholder, hint, hintTyping, debounce, size, }: SearchProps) => JSX.Element;
export default Search;
