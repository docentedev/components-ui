export type AlertSize = 's' | 'l';
type AlertNoDataProps = {
    title: string;
    description: string;
    size?: AlertSize;
};
declare const AlertNoData: ({ title, description, size }: AlertNoDataProps) => JSX.Element;
export default AlertNoData;
