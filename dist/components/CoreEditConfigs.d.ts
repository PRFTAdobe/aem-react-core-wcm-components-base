import { EditConfig, MappedComponentProperties } from '@adobe/aem-react-editable-components';
import { BreadCrumbItem } from './CoreBreadCrumb';
import { default as React } from 'react';
import { OEmbedResponse, YouTubeProps } from './CoreEmbed';
import { LanguageNavigationItem } from './CoreLanguageNavigation';
import { ListItemProps } from './CoreList';
import { NavigationItem } from './CoreNavigation';
import { TeaserProps } from './CoreTeaser';

interface BreadcrumbComponentProperties extends MappedComponentProperties {
    items: BreadCrumbItem[];
}
export declare const BreadcrumbEditConfig: EditConfig<BreadcrumbComponentProperties>;
interface ButtonComponentProperties extends MappedComponentProperties {
    text: string;
}
export declare const ButtonEditConfig: EditConfig<ButtonComponentProperties>;
interface DownloadComponentProperties extends MappedComponentProperties {
    url?: string;
    handleOnClick?(event: React.MouseEvent): void;
}
export declare const DownloadEditConfig: EditConfig<DownloadComponentProperties>;
interface EmbedComponentProperties extends MappedComponentProperties {
    result?: OEmbedResponse;
    html?: string;
    youTubeProps?: YouTubeProps;
    type: 'URL' | 'HTML' | 'EMBEDDABLE';
    url?: string;
}
export declare const EmbedEditConfig: EditConfig<EmbedComponentProperties>;
interface ImageComponentProperties extends MappedComponentProperties {
    src: string;
}
export declare const ImageEditConfig: EditConfig<ImageComponentProperties>;
interface LanguageNavigationComponentProperties extends MappedComponentProperties {
    items?: LanguageNavigationItem[];
}
export declare const LanguageNavigationEditConfig: EditConfig<LanguageNavigationComponentProperties>;
interface ListComponentProperties extends MappedComponentProperties {
    items: ListItemProps[];
}
export declare const ListEditConfig: EditConfig<ListComponentProperties>;
interface NavigationComponentProperties extends MappedComponentProperties {
    items: NavigationItem[];
}
export declare const NavigationEditConfig: EditConfig<NavigationComponentProperties>;
interface TeaserComponentProperties extends TeaserProps, MappedComponentProperties {
}
export declare const TeaserEditConfig: EditConfig<TeaserComponentProperties>;
interface TitleComponentProperties extends MappedComponentProperties {
    text: string;
}
export declare const TitleEditConfig: EditConfig<TitleComponentProperties>;
interface TextComponentProperties extends MappedComponentProperties {
    text: string;
}
export declare const TextEditConfig: EditConfig<TextComponentProperties>;
export {};
