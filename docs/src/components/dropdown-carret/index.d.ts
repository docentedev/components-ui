import React from 'react';
export type DropdownCarretProps = {
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    open: boolean;
    size?: number;
};
declare const DropdownCarret: ({ onClick, open, size }: DropdownCarretProps) => JSX.Element;
export default DropdownCarret;
