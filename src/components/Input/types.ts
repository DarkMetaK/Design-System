import { InputHTMLAttributes, ReactNode } from "react";

export interface IInputRoot {
    children: ReactNode;
}

export interface IInputIcon {
    children: ReactNode;
}

export interface IInputContent extends InputHTMLAttributes<HTMLInputElement> {}