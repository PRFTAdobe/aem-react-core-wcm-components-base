import { default as React } from 'react';
import { CoreComponentModel, RoutedModel } from './ComponentProperties';

export interface ImageProps extends CoreComponentModel, RoutedModel {
    alt: string;
    displayPopupTitle?: boolean;
    link?: string;
    src: string;
    title?: string;
    width?: string;
}
export declare const isEmpty: (src: string) => boolean;
declare const CoreImage: ({ alt, baseCssClass, hidePlaceHolder, id, isInEditor, link, routed, src, title, width, }: ImageProps) => React.JSX.Element | null;
export default CoreImage;
