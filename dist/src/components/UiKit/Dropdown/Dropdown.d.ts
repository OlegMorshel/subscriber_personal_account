import React from 'react';
import { FormikSetFieldTouched } from '@src/utils/commonTypes';
declare type Props<TValue extends string = string> = {
    type: 'singleSelect';
    title: string;
    list: DropdownItem<TValue>[] | Readonly<DropdownItem<TValue>[]>;
    /***
     * массив ID элементов из list
     */
    selected: DropdownValue<TValue>;
    /***
     * присваивает массив ID элементов из list
     */
    setSelected: (newValue: DropdownValue<TValue>) => void;
    classNameForWrapper?: string;
    error?: string | string[];
    touched?: boolean;
    name?: string;
    /**
     * Отрабатывает на поле с именем name
     */
    setFieldTouched?: FormikSetFieldTouched;
    disabled?: boolean;
    onFinishScroll?: () => void;
    isCompanies?: boolean;
    hideClearButton?: boolean;
    hideValueField?: boolean;
    isOpen?: boolean;
    handleClose?: () => void;
    wrapperRef?: React.RefObject<HTMLDivElement>;
    isLoading?: boolean;
    toTop?: boolean;
};
export declare type DropdownValue<T extends string = string> = T[];
export declare type DropdownItem<T extends string = string> = {
    id: T;
    /**
     * Отображаемое название элемента
     */
    name: string;
    /**
     * Адрес компании
     */
    address?: {
        main: string;
    };
    /**
     * Тип компании
     */
    type?: {
        name: string;
    };
};
declare function Dropdown<TValue extends string = string>({ type, title, classNameForWrapper, error, touched, setFieldTouched, name, list, selected, setSelected, disabled, onFinishScroll, isCompanies, hideClearButton, isLoading, toTop, hideValueField, isOpen: isOpenProps, handleClose: handleCloseProps, wrapperRef: wrapperRefProps, ...props }: Props<TValue>): JSX.Element;
export default Dropdown;
