import React, { ChangeEventHandler, FocusEventHandler } from 'react';
export interface InputProps {
    title: string;
    value?: string | number;
    setValue: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    id?: string;
    name?: string;
    touched?: boolean;
    classNameForWrapper?: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    isTextArea?: boolean;
    isPassword?: boolean;
    isDisabled?: boolean;
    isCorrect?: boolean;
    error?: string;
    /**
     * Включает или выключает текст ошибки. По умолчанию true
     */
    isErrorText?: boolean;
    advice?: string;
    onIconClick?: () => void;
    handleBlur?: FocusEventHandler;
    placeholder?: string;
    isPhone?: boolean;
    isNumber?: boolean;
    autoComplete?: string;
    titleAlwaysUp?: boolean;
}
declare const CustomInput: React.FC<InputProps>;
export default CustomInput;
