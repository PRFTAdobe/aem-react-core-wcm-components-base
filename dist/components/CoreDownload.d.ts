import { default as React } from 'react';
import { ComponentMapping } from '@adobe/aem-react-editable-components';
import { CoreComponentModel, RoutedModel } from './ComponentProperties';

export interface DownloadProps extends CoreComponentModel, RoutedModel {
    actionText?: string;
    componentMapping?: typeof ComponentMapping;
    cqType?: string;
    description?: string;
    displayFilename: boolean;
    displayFormat: boolean;
    displaySize: boolean;
    extension?: string;
    filename?: string;
    format?: string;
    size?: string;
    title: string;
    titleType: string;
    url?: string;
    handleOnClick?(event: React.MouseEvent): void;
}
export declare const isEmpty: ({ url, handleOnClick, }: {
    handleOnClick?(event: React.MouseEvent): void;
    url?: string;
}) => boolean;
declare const CoreDownload: ({ actionText, componentMapping, cqType, description, filename, format, handleOnClick, hidePlaceHolder, id, isInEditor, size, title, titleType, url, baseCssClass, displayFilename, displayFormat, displaySize, }: DownloadProps) => React.JSX.Element | null;
export default CoreDownload;
