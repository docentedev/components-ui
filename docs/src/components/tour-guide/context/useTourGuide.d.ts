declare const useTourGuide: (name: string) => {
    name: string;
    dispacth: {
        onClick: (event: import("react").MouseEvent<HTMLButtonElement, MouseEvent>) => void;
        open: (step?: number | undefined) => void;
        closeAll: () => void;
        total: () => number;
    } | {
        open: () => undefined;
        closeAll: () => undefined;
        total: number;
        onClick: () => undefined;
    };
};
export default useTourGuide;
