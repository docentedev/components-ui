export type Range = {
    min: number;
    max: number;
};
export interface DropdownRangeProps {
    value: Range;
    onChange: (value: Range) => void;
    labelFrom: string;
    labelTo: string;
    label: string;
    textButton: string;
    prefix?: string;
}
