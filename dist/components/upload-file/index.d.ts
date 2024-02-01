export type UploadFileProps = {
    title: string;
    text: string;
    textButton: string;
    textRetry: string;
    allowedTypes: string[];
    onChange: (file?: File) => void;
    variant: 'success' | 'error';
};
declare const UploadFile: ({ title, text, textButton, allowedTypes, onChange, variant, textRetry, }: UploadFileProps) => JSX.Element;
export default UploadFile;
