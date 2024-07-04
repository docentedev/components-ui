export declare const recursiveFindNext: (tour: string, step: number) => {
    node: HTMLElement | undefined;
    step: number;
};
export declare const recursiveFindPrev: (tour: string, step: number) => {
    node: HTMLElement | undefined;
    step: number;
};
export declare const nameBackdrop: (tour: string, step: number) => string;
export declare const generateStyleTourGuide: () => void;
export declare const registerTourGuide: (tour: string, step: number) => void;
export declare const dispathOpen: (tour: string, step?: number) => void;
export declare const tourGuideDispatch: (tour: string) => {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    open: (step?: number) => void;
    closeAll: () => void;
    total: () => number;
};
