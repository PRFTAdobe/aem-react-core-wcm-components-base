import { default as React } from 'react';
import { CoreComponentModel, RoutedModel } from './ComponentProperties';

export interface ImageProps extends CoreComponentModel, RoutedModel {
    alt: string;
    displayPopupTitle?: boolean;
    imageLink?: {
        attributes?: object;
        url: string;
        valid?: boolean;
    };
    src: string;
    title?: string;
    width?: string;
}
export declare const isEmpty: (src: string) => boolean;
declare const CoreImage: React.ForwardRefExoticComponent<ImageProps & React.RefAttributes<HTMLDivElement>>;
export default CoreImage;
