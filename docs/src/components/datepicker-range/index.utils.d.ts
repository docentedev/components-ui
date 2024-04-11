export declare const maskDate: (value: string) => string;
export declare const getDateFromString: (value: string) => {
    valid: boolean;
    date: Date;
};
export declare const getStringToDate: (value: Date) => string;
export declare const compare2Dates: (date1: Date, date2: Date) => boolean;
