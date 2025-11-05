import { default as React } from 'react';
import { CoreComponentModel, RoutedModel } from './ComponentProperties';
export interface TextProps extends CoreComponentModel, RoutedModel {
    text?: string;
    richText?: boolean;
    id?: string;
}
export declare const isEmpty: (text?: string) => boolean;
declare const CoreText: (props: TextProps) => React.JSX.Element | null;
export default CoreText;
