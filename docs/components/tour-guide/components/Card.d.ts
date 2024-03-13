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
}
declare const Card: (props: CardProps) => JSX.Element;
export default Card;
