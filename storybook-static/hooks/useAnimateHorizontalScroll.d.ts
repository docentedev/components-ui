declare function useAnimateHorizontalScroll(ref?: React.MutableRefObject<HTMLElement | null>): {
    recalculate: () => void;
    run: (amount: number, duration: number) => void;
    showLButton: boolean;
    showRButton: boolean;
};
export default useAnimateHorizontalScroll;
