import { default as React } from 'react';
import { CoreComponentModel, HasBaseCssClass, RoutedModel } from './ComponentProperties';
export interface ListItemProps extends RoutedModel, HasBaseCssClass {
    dateFormatString?: string;
    description?: string;
    index?: number;
    lastModified?: number;
    lastModifiedFormatted?: string;
    link?: {
        url: string;
        valid?: boolean;
    };
    linkItems?: boolean;
    path: string;
    showDescription?: boolean;
    showModificationDate?: boolean;
    title: string;
}
export interface ListProps extends CoreComponentModel, RoutedModel {
    dateFormatString: string;
    displayItemAsTeaser?: boolean;
    items: ListItemProps[];
    linkItems: boolean;
    showDescription: boolean;
    showModificationDate: boolean;
}
export declare const isEmpty: (items: ListItemProps[]) => boolean;
declare const CoreList: (props: ListProps) => React.JSX.Element | null;
export default CoreList;
