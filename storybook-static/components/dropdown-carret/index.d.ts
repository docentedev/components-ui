import React from 'react';
export type DropdownCarretProps = {
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    open: boolean;
};
declare const DropdownCarret: ({ onClick, open }: DropdownCarretProps) => JSX.Element;
export default DropdownCarret;
