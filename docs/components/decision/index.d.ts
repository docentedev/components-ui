export type DecisionProps = {
    variant?: 'horizontal' | 'vertical';
    loading?: boolean;
    disabled?: boolean;
    onConfirm: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onCancel?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    textConfirm: string;
    textCancel?: string;
};
declare const Decision: ({ variant, onConfirm, onCancel, loading, disabled, textConfirm, textCancel, }: DecisionProps) => JSX.Element;
export default Decision;
