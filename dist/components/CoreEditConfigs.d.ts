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

interface BreadcrumbComponentProperties extends BreadCrumbProps, MappedComponentProperties {
}
export declare const BreadCrumbEditConfig: EditConfig<BreadcrumbComponentProperties>;
interface ButtonComponentProperties extends ButtonProps, MappedComponentProperties {
}
export declare const ButtonEditConfig: EditConfig<ButtonComponentProperties>;
interface DownloadComponentProperties extends DownloadProps, MappedComponentProperties {
}
export declare const DownloadEditConfig: EditConfig<DownloadComponentProperties>;
interface EmbedComponentProperties extends EmbedProps, MappedComponentProperties {
}
export declare const EmbedEditConfig: EditConfig<EmbedComponentProperties>;
interface ImageComponentProperties extends ImageProps, MappedComponentProperties {
}
export declare const ImageEditConfig: EditConfig<ImageComponentProperties>;
interface LanguageNavigationComponentProperties extends LanguageNavigationProps, MappedComponentProperties {
}
export declare const LanguageNavigationEditConfig: EditConfig<LanguageNavigationComponentProperties>;
interface ListComponentProperties extends ListProps, MappedComponentProperties {
}
export declare const ListEditConfig: EditConfig<ListComponentProperties>;
interface NavigationComponentProperties extends NavigationProps, MappedComponentProperties {
}
export declare const NavigationEditConfig: EditConfig<NavigationComponentProperties>;
interface TeaserComponentProperties extends TeaserProps, MappedComponentProperties {
}
export declare const TeaserEditConfig: EditConfig<TeaserComponentProperties>;
interface TitleComponentProperties extends TitleProps, MappedComponentProperties {
}
export declare const TitleEditConfig: EditConfig<TitleComponentProperties>;
interface TextComponentProperties extends TextProps, MappedComponentProperties {
}
export declare const TextEditConfig: EditConfig<TextComponentProperties>;
export {};
