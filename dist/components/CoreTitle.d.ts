import { default as React } from 'react';
import { CoreComponentModel, RoutedModel } from './ComponentProperties';
export interface TitleProps extends CoreComponentModel, RoutedModel {
    link?: {
        url: string;
        valid?: boolean;
    };
    linkDisabled: boolean;
    nested?: boolean;
    text: string;
    type?: string;
}
export declare const isEmpty: (text?: string) => boolean;
declare const CoreTitle: (props: TitleProps) => React.JSX.Element | null;
export default CoreTitle;
