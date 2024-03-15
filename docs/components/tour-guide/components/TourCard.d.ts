interface CardProps {
    tour: string;
    step: number;
    render: (props: {
        chip: JSX.Element;
        onPrev: () => void;
        onNext: () => void;
        onClose: () => void;
    }) => JSX.Element;
    position: 'top' | 'left' | 'right' | 'bottom' | 'bottom-left' | 'bottom-right';
    withClose?: boolean;
    width?: string;
    variant?: 'tooltip' | 'modal';
}
declare const TourCard: (props: CardProps) => JSX.Element;
export default TourCard;
