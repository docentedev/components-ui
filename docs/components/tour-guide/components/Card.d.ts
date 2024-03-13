interface CardProps {
    tour: string;
    step: number;
    render: (props: {
        chip: JSX.Element;
        onPrev: () => void;
        onNext: () => void;
        onClose: () => void;
    }) => JSX.Element;
}
declare const Card: (props: CardProps) => JSX.Element;
export default Card;
