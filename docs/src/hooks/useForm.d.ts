export interface Target {
    name: string;
    value: string | number | boolean;
}
export interface InitialValues {
    [key: string]: string | number | boolean;
}
declare const useForm: (initialValues: InitialValues) => {
    initialValues: InitialValues;
    values: InitialValues;
    handleChange: (e: {
        target: Target;
    }) => void;
    reset: () => void;
    setField: (name: string, value: string | number | boolean) => void;
    setFields: (fields: {
        [key: string]: string | number | boolean;
    }) => void;
    inputChange: (name: string) => {
        name: string;
        value: string;
        onChange: (e: {
            target: Target;
        }) => void;
    };
    click: (callback: (values: InitialValues) => void) => {
        onClick: () => void;
    };
    submit: (callback: (values: InitialValues) => void) => {
        onSubmit: (e: unknown) => void;
    };
    resetClick: () => {
        onClick: () => void;
    };
};
export default useForm;
