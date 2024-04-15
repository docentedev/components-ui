import { DateRange, RenderFooterProps } from '../..';
type WeekProps = {
    startWeekDay: number;
    displayDate: Date;
    start: Date;
    end: Date;
    daysNames: string[];
    monthsNames: string[];
    onChangeDate: (dates: DateRange) => void;
    maxDate: Date | undefined;
    minDate: Date | undefined;
    setMode: (mode: 'day' | 'month' | 'year') => void;
    onChangeDisplayDate: (date: Date) => void;
    textDescription?: string;
    onPrevMonth: () => void;
    onNextMonth: () => void;
    textStarDateInstruction?: string;
    textEndDateInstruction?: string;
    onMode: () => void;
    onConfirm?: () => void;
    textOnConfirm: string;
    textOnCancel: string;
    onCancel: () => void;
    renderFooter?: (props: RenderFooterProps) => React.ReactElement;
    setDisplayDate: (date: Date) => void;
};
declare const Week: React.FC<WeekProps>;
export default Week;
