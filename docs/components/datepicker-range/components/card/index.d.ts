type CardProps = {
    children: React.ReactNode;
    onClose: () => void;
    position: 'left' | 'right';
    mode: 'day' | 'month' | 'year';
    hiddenCloseButton: boolean;
};
declare const Card: React.FC<CardProps>;
export default Card;
