import { TYPE_VARIANT } from './index.utils';
export type UploadFilesProps = {
    title: string;
    text: string;
    textButton: string;
    textRetry: string;
    allowedTypes: string[];
    onChange: (files?: File[]) => void;
    variant?: keyof typeof TYPE_VARIANT;
    errorMessage: string;
};
declare const UploadFiles: ({ title, text, textButton, allowedTypes, onChange, textRetry, errorMessage, }: UploadFilesProps) => JSX.Element;
export default UploadFiles;
