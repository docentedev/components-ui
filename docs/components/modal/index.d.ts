import React from 'react';
export type ModalProps = {
    onClose: (state: boolean) => void;
    open: boolean;
    children: React.ReactNode;
    width?: string;
    header?: React.ReactNode;
    closeOnBackdrop?: boolean;
    animated?: boolean;
};
declare const Modal: ({ children, open, onClose, header, width, closeOnBackdrop, animated, }: ModalProps) => React.ReactPortal;
export default Modal;
