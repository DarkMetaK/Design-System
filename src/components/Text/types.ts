import { ReactNode } from "react";

export interface IText {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild ?: boolean;
    className?: string;
}