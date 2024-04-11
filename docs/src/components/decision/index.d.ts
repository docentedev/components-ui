import Icons from '../icon/icons';
export type DecisionProps = {
    variant?: 'horizontal' | 'vertical';
    loading?: boolean;
    disabled?: boolean;
    onConfirm: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onCancel?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    textConfirm: string;
    textCancel?: string;
    iconLeftConfirm?: keyof typeof Icons;
    iconRightConfirm?: keyof typeof Icons;
    iconLeftCancel?: keyof typeof Icons;
    iconRightCancel?: keyof typeof Icons;
};
declare const Decision: ({ variant, onConfirm, onCancel, loading, disabled, textConfirm, textCancel, iconLeftConfirm, iconRightConfirm, iconLeftCancel, iconRightCancel, }: DecisionProps) => JSX.Element;
export default Decision;
