export type AcceptableValue = string | number | boolean | Date | undefined | null | AcceptableValue[] | {
    [key: string]: AcceptableValue;
};
export interface Target {
    name: string;
    value: AcceptableValue;
}
export interface InitialValues {
    [key: string]: AcceptableValue;
}
declare const useForm: <T = InitialValues>(initialValues: T) => {
    initialValues: T;
    values: T;
    handleChange: (e: {
        target: Target;
    }) => void;
    reset: () => void;
    setField: (name: string, value: AcceptableValue) => void;
    setFields: (fields: {
        [key: string]: string | number | boolean | Date | undefined;
    }) => void;
    inputChange: (name: string) => {
        name: string;
        value: string;
        onChange: (e: {
            target: Target;
        }) => void;
    };
    dateRage2Change: (startName: string, endName: string) => {
        start: Date | undefined;
        end: Date | undefined;
        onChange: (start?: Date, end?: Date) => void;
    };
    click: (callback: (values: T) => void) => {
        onClick: () => void;
    };
    submit: (callback: (values: T) => void) => {
        onSubmit: (e: unknown) => void;
    };
    resetClick: () => {
        onClick: () => void;
    };
    getField: <T_1>(name: string) => T_1;
};
export default useForm;
