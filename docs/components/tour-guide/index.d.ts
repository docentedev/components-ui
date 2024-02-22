export type Render = ({ total, current }: {
    total: number;
    current: number;
}) => JSX.Element;
export type TourGuideProps = {
    step: number;
    name: string;
    render: Render;
};
declare const TourGuide: React.FC<TourGuideProps>;
export default TourGuide;
