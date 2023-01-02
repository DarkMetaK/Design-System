import { ReactNode } from "react";

export interface IHeading {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild ?: boolean;
    classname?: string;
}