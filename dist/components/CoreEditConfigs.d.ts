import { EditConfig, MappedComponentProperties } from '@adobe/aem-react-editable-components';
import { BreadCrumbProps } from './CoreBreadCrumb';
import { ButtonProps } from './CoreButton';
import { DownloadProps } from './CoreDownload';
import { EmbedProps } from './CoreEmbed';
import { ImageProps } from './CoreImage';
import { LanguageNavigationProps } from './CoreLanguageNavigation';
import { ListProps } from './CoreList';
import { NavigationProps } from './CoreNavigation';
import { TeaserProps } from './CoreTeaser';
import { TitleProps } from './CoreTitle';
import { TextProps } from './CoreText';

export interface BreadcrumbComponentProperties extends BreadCrumbProps, MappedComponentProperties {
}
export declare const BreadCrumbEditConfig: EditConfig<BreadcrumbComponentProperties>;
export interface ButtonComponentProperties extends ButtonProps, MappedComponentProperties {
}
export declare const ButtonEditConfig: EditConfig<ButtonComponentProperties>;
export interface DownloadComponentProperties extends DownloadProps, MappedComponentProperties {
}
export declare const DownloadEditConfig: EditConfig<DownloadComponentProperties>;
export interface EmbedComponentProperties extends EmbedProps, MappedComponentProperties {
}
export declare const EmbedEditConfig: EditConfig<EmbedComponentProperties>;
export interface ImageComponentProperties extends ImageProps, MappedComponentProperties {
}
export declare const ImageEditConfig: EditConfig<ImageComponentProperties>;
export interface LanguageNavigationComponentProperties extends LanguageNavigationProps, MappedComponentProperties {
}
export declare const LanguageNavigationEditConfig: EditConfig<LanguageNavigationComponentProperties>;
export interface ListComponentProperties extends ListProps, MappedComponentProperties {
}
export declare const ListEditConfig: EditConfig<ListComponentProperties>;
export interface NavigationComponentProperties extends NavigationProps, MappedComponentProperties {
}
export declare const NavigationEditConfig: EditConfig<NavigationComponentProperties>;
export interface TeaserComponentProperties extends TeaserProps, MappedComponentProperties {
}
export declare const TeaserEditConfig: EditConfig<TeaserComponentProperties>;
export interface TitleComponentProperties extends TitleProps, MappedComponentProperties {
}
export declare const TitleEditConfig: EditConfig<TitleComponentProperties>;
export interface TextComponentProperties extends TextProps, MappedComponentProperties {
}
export declare const TextEditConfig: EditConfig<TextComponentProperties>;
