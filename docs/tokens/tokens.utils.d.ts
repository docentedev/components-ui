import { tokenType } from './tokens.type';
export declare const generateStyleRoot: () => void;
export declare const getTokensInfo: () => {
    [key: string]: {
        title: string;
        data: tokenType[];
    }[];
};
