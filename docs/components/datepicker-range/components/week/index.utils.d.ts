export type Day = {
    index: number;
    day: number;
    month: number;
    year: number;
    datetime: Date;
    inRange: boolean;
};
export declare const isRangeDatesInPreviusMonth: (start: Date, end: Date, displayDate: Date) => boolean;
export declare const isRangeDatesInNextMonth: (start: Date, end: Date, displayDate: Date) => boolean;
export declare const isStartEndSameMonth: (start: Date, end: Date) => boolean;
export declare const dayIsDisabled: (day: Day, start: Date, _end: Date, _minDate: Date, _maxDate: Date, isSelectedTrueFalse: boolean) => boolean;
export declare const generateDays: ({ startWeekDay: startWeekDayProp, displayDate, start, end, }: {
    startWeekDay: number;
    displayDate: Date;
    start: Date;
    end: Date;
}) => {
    daysBeforeMonth: Day[];
    daysInMonth: Day[];
    daysAfterMonth: Day[];
};
