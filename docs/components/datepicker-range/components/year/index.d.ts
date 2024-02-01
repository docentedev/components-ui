type WindowYearsProps = {
    start: Date;
    end: Date;
    onDisplayDate: (date: Date) => void;
    textHeaderYear: string;
    min?: Date;
    max?: Date;
};
declare const Year: ({ start, end, onDisplayDate, textHeaderYear, min, max, }: WindowYearsProps) => JSX.Element;
export default Year;
