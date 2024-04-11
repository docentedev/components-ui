declare const useDragAndDrop: <T>(data: T[], onChange: (data: T[]) => void) => {
    dragStart: (position: number) => void;
    dragEnter: (position: number) => void;
    dragEnd: () => void;
    dragItem: import("react").MutableRefObject<number | null>;
    dragOverItem: import("react").MutableRefObject<number | null>;
};
export default useDragAndDrop;
