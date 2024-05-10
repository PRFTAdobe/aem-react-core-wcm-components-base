import { default as React } from 'react';
import { CoreComponentModel, HasBaseCssClass, RoutedModel } from './ComponentProperties';

export interface NavigationItem extends RoutedModel, HasBaseCssClass {
    active: boolean;
    children?: NavigationItem[];
    description?: string;
    index?: number;
    lastModified: number;
    level: number;
    path: string;
    title: string;
    link: {
        valid?: boolean;
        url: string;
    };
}
export interface NavigationProps extends CoreComponentModel, RoutedModel {
    accessibilityLabel?: string;
    items: NavigationItem[];
}
export declare const isEmpty: (props: {
    items?: NavigationItem[];
}) => boolean;
export declare const NavigationItem: (item: NavigationItem) => import("react/jsx-runtime").JSX.Element;
export declare const NavigationGroup: (item: NavigationItem) => import("react/jsx-runtime").JSX.Element;
declare const CoreNavigation: (props: NavigationProps) => React.JSX.Element | null;
export default CoreNavigation;
