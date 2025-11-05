import { ComponentMapping } from '@adobe/aem-react-editable-components';
import { default as React } from 'react';
import { CoreComponentModel, RoutedModel } from './ComponentProperties';
interface TeaserAction extends RoutedModel {
    link: {
        url: string;
        valid?: boolean;
    };
    title: string;
}
export interface TeaserProps extends CoreComponentModel, RoutedModel {
    actions: TeaserAction[];
    actionsEnabled: boolean;
    componentMapping?: typeof ComponentMapping;
    cqType?: string;
    description?: string;
    imageAlt: string;
    imageLinkHidden: boolean;
    imagePath: string;
    link?: {
        url: string;
        valid?: boolean;
    };
    pretitle?: string;
    title: string;
    titleLinkHidden: boolean;
    titleType?: string;
}
export declare const isEmpty: (props: TeaserProps) => boolean;
declare const CoreTeaser: (props: TeaserProps) => React.JSX.Element | null;
export default CoreTeaser;
