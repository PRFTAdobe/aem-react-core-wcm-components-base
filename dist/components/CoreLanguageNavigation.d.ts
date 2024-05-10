import { default as React } from 'react';
import { NavigationItem, NavigationProps } from './CoreNavigation';

export interface LanguageNavigationItem extends NavigationItem {
    active: boolean;
    children?: LanguageNavigationItem[];
    country: string;
    description?: string;
    language: string;
    lastModified: number;
    level: number;
    locale: string;
    path: string;
    title: string;
    link: {
        valid?: boolean;
        url: string;
    };
}
export interface LanguageNavigationProps extends NavigationProps {
    accessibilityLabel?: string;
    items: LanguageNavigationItem[];
}
export declare const isEmpty: (props: {
    items?: LanguageNavigationItem[];
}) => boolean;
declare const CoreLanguageNavigation: (props: LanguageNavigationProps) => React.JSX.Element | null;
export default CoreLanguageNavigation;
