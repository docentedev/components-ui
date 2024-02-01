type DatepickerRange2Props = {
    start?: Date;
    end?: Date;
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
    onChange: (start?: Date, end?: Date) => void;
    onCancel?: () => void;
    textOnConfirm?: string;
    textOnCancel?: string;
    position?: 'left' | 'right';
};
declare const DatepickerRange2: (props: DatepickerRange2Props) => JSX.Element;
export default DatepickerRange2;
