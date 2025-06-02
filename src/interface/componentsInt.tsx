import { PropsWithChildren, ReactNode } from "react";
import { product } from "./objInterfaces";

export interface singleProp {
    prop: any
}

export interface link {
    label: string;
    path: string;
}

export interface route {
    path: string;
    element: ReactNode
}

export interface authPage extends PropsWithChildren {
    label: string;
    page: string;
    navigation: string;
    formSubmit: Function;
}

interface inputCommon {
    id: string;
    label: string;
    isRequired: boolean;
    handleChange: Function
}

export interface textInput extends inputCommon {
    value: number | string;
    type: string;
    placeholder: string;
}

export interface passInput extends textInput {
    value: number | string;
    isVisible: boolean;
    changeVisibility: Function;
}

export interface textArea extends inputCommon {
    value: number | string;
    placeholder: string;
}

export interface checkbox extends inputCommon {
    checked?: boolean;
}

export interface toast {
    message: string;
    closeMessage: Function;
}

export interface pagination {
    page: number; 
    products: product[]
}

export interface paginationProps {
    paginations: pagination[]
    label?: number 
}