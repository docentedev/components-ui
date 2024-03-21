export declare const checkBase: (base: {
    [key: string]: string;
}, value: string | number | null | undefined, name: string) => void;
export declare const isValidBase: (base: {
    [key: string]: string;
}, value: string | number | null | undefined) => boolean;
export declare const getBaseVar: (base: string, variant: string | number | null | undefined) => string;
