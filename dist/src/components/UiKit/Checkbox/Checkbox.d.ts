import React from 'react';
export interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
    label?: string;
    type?: 'default' | 'table';
}
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
