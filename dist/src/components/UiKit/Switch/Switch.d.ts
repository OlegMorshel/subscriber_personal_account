import React from 'react';
export interface SwitchButtonProps extends React.HTMLProps<HTMLInputElement> {
    label?: string;
}
declare const Switch: React.FC<SwitchButtonProps>;
export default Switch;
