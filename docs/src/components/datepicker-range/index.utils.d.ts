export declare const maskDate: (value: string) => string;
export declare const getDateFromString: (value: string) => {
    valid: boolean;
    date: Date;
};
export declare const getStringToDate: (value: Date) => string;
export declare const compare2Dates: (date1: Date, date2: Date) => boolean;
export type DateRange = {
    start?: Date;
    end?: Date;
};
export declare const handleDateChangeHelper: ({ start, end }: DateRange, setStartDate: (date: string) => void, setEndDate: (date: string) => void, handler: (start: Date, end: Date) => void, getStringToDate: (date: Date) => string, getDateFromString: (date: string) => {
    date: Date;
}, startDate: string, endDate: string) => void;
export declare const isAValidDate: (dat?: Date) => boolean;
export declare const texts: {
    daysNames: string[];
    monthsNames: string[];
};
export type SetDate = (date: string) => void;
export type DateInput = 'start' | 'end';
export declare const dateUtils: {
    nextMonth: (date: Date) => Date;
    prevMonth: (date: Date) => Date;
    initHour: (date: Date) => Date;
    endHour: (date: Date) => Date;
    compare2Dates: (date1: Date, date2: Date, opertor: '<' | '<=' | '>' | '>=') => boolean;
    compare2Years: (date1: Date, date2: Date, opertor: '<' | '<=' | '>' | '>=') => boolean;
};
