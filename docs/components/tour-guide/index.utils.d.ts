export declare const registerTourGuide: (tour: string, step: number) => void;
export declare const dispathOpen: (tour: string, step?: number) => void;
export declare const tourGuideDispatch: (tour: string) => {
    open: (step?: number) => void;
    closeAll: () => void;
    total: () => number;
};
