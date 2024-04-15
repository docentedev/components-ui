export type DateRange = {
    start?: Date;
    end?: Date;
};
export type RenderFooterProps = {
    onChangeDate: ({ start, end }: DateRange) => void;
};
type DatepickerRangeProps = {
    block?: boolean;
    start?: Date;
    end?: Date;
    onChange?: (start: Date, end: Date) => void;
    onBlur?: (start: Date, end: Date) => void;
    daysNames?: string[];
    startWeekDay?: number;
    monthsNames?: string[];
    min?: Date;
    max?: Date;
    textDescription?: string;
    textStarDateInstruction?: string;
    textEndDateInstruction?: string;
    placeholderStartDate?: string;
    placeholderEndDate?: string;
    textHeaderYear?: string;
    label?: string;
    onConfirm?: (start: Date, end: Date) => void;
    startConfirmDate?: Date;
    endConfirmDate?: Date;
    onCancel?: () => void;
    textOnConfirm?: string;
    textOnCancel?: string;
    position?: 'left' | 'right';
    onClear?: (start: undefined, end: undefined) => void;
    renderFooter?: (props: RenderFooterProps) => React.ReactElement;
};
declare const DatepickerRange: (props: DatepickerRangeProps) => JSX.Element;
export default DatepickerRange;
