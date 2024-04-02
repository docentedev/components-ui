import React from 'react';
export type TourGuideProps = {
    render: (props: {
        chip: JSX.Element;
        onPrev: () => void;
        onNext: () => void;
        onClose: () => void;
    }) => JSX.Element;
    tour: {
        name: string;
    };
    step: number;
    position?: 'top' | 'left' | 'right' | 'bottom' | 'bottom-left' | 'bottom-right';
    withClose?: boolean;
    width?: string;
    variant?: 'tooltip' | 'modal';
    children?: JSX.Element;
};
declare const TourGuide: React.FC<TourGuideProps>;
export default TourGuide;
