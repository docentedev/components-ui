export type Level = 'error' | 'warning' | 'success' | 'default' | 'disabled';
export type DelayTrafficLightProps = {
    date: Date | string;
    pivot: Date | string;
    error?: string;
    warning?: string;
    success?: string;
    default?: string;
    disabled?: string;
    withChip?: boolean;
    render: (props: {
        level: Level;
        formatDiff: string;
        diff: number;
    }) => React.ReactElement | string;
};
declare const DelayTrafficLight: (props: DelayTrafficLightProps) => JSX.Element;
export default DelayTrafficLight;
