export type MakeDay = {
    date: Date;
    string: string;
    dayInWeek: number;
    dayInMonth: number;
    name: string;
    month: string;
    year: number;
    verbose: string;
};
export type Lang = {
    days: {
        [key: string]: string;
    };
    months: {
        [key: string]: string;
    };
    of: string;
};
declare const DateUtils: (startWeek?: 'monday' | 'sunday') => {
    lang: Lang;
    makeDay: (date: Date, lang: Lang) => MakeDay;
    getDaysInMonth: (month: number, year: number) => {
        lastDayNumber: number;
        prevDayNumber: number;
        prevDays: MakeDay[];
        lastDays: MakeDay[];
        days: MakeDay[];
    };
    getYearArray: (year: number) => number[];
};
export declare function makeMonthDateCompareIsMiDisabled(val: [string, string], dayDate: MakeDay): Date;
export declare function makeMonthDateCompareIsMaxDisabled(val: [string, string], dayDate: MakeDay): Date;
export declare function compareIsMinDisabled(a: Date, b?: Date): boolean;
export declare function compareIsMaxDisabled(a: Date, b?: Date): boolean;
export declare const getDateFromString: (dateStr: string) => {
    valid: boolean;
    date: Date | undefined;
};
export declare const getFormatDate: (date: Date) => string;
export declare const maskDate: (value: string) => string;
export default DateUtils;
