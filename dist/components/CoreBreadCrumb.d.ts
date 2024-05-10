import { default as React } from 'react';
import { CoreComponentModel, HasBaseCssClass, RoutedModel } from './ComponentProperties';

interface BreadCrumbLink {
    attributes?: object;
    url: string;
    valid?: boolean;
}
export interface BreadCrumbItem extends RoutedModel, HasBaseCssClass {
    active: boolean;
    index?: number;
    link: BreadCrumbLink;
    navigable?: boolean;
    title: string;
}
interface BreadCrumbProps extends CoreComponentModel, RoutedModel {
    ariaLabel: string;
    items: BreadCrumbItem[];
}
export declare const isEmpty: (props: {
    items: BreadCrumbItem[];
}) => boolean;
declare const BreadCrumbLink: ({ baseCssClass, link, routed, title, }: BreadCrumbItem) => import("react/jsx-runtime").JSX.Element;
declare const CoreBreadCrumb: ({ ariaLabel, hidePlaceHolder, id, isInEditor, items, baseCssClass, }: BreadCrumbProps) => React.JSX.Element | null;
export default CoreBreadCrumb;
