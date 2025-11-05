import { default as React } from 'react';
import { CoreComponentModel, RoutedModel } from './ComponentProperties';
export interface ButtonProps extends CoreComponentModel, RoutedModel {
    ariaLabel?: string;
    buttonLink?: {
        url: string;
        valid?: boolean;
    };
    className?: string;
    icon?: string;
    text?: string;
    type?: 'submit' | 'reset' | 'button';
    routed?: boolean;
    handleOnClick?(event: React.MouseEvent): void;
}
export declare const isEmpty: (text?: string) => boolean;
declare const CoreButton: ({ ariaLabel, buttonLink, className, hidePlaceHolder, id, icon, isInEditor, text, handleOnClick, routed, baseCssClass, type, }: ButtonProps) => React.JSX.Element | null;
export default CoreButton;
