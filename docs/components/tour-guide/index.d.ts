export type TourGuideProps = {
    render: (props: {
        chip: JSX.Element;
        onPrev: () => void;
        onNext: () => void;
        onClose: () => void;
    }) => JSX.Element;
    tour: string;
    step: number;
};
declare const TourGuide: React.FC<TourGuideProps>;
export default TourGuide;
