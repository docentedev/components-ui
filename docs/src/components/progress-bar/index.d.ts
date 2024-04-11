export type ProgressBarProps = {
    value: number;
    size?: 's' | 'm';
};
declare const ProgressBar: ({ value, size }: ProgressBarProps) => JSX.Element;
export default ProgressBar;
