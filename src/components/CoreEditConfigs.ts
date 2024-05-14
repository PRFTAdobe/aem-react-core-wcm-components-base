import {
  EditConfig,
  MappedComponentProperties,
} from '@adobe/aem-react-editable-components';
import {
  BreadCrumbProps,
  isEmpty as BreadCrumbIsEmpty,
} from '@/components/CoreBreadCrumb';
import { ButtonProps, isEmpty as ButtonIsEmpty } from '@/components/CoreButton';
import {
  DownloadProps,
  isEmpty as DownloadIsEmpty,
} from '@/components/CoreDownload';
import { EmbedProps, isEmpty as EmbedIsEmpty } from '@/components/CoreEmbed';
import { ImageProps, isEmpty as ImageIsEmpty } from '@/components/CoreImage';
import {
  isEmpty as LanguageNavigationIsEmpty,
  LanguageNavigationProps,
} from '@/components/CoreLanguageNavigation';
import { isEmpty as ListIsEmpty, ListProps } from '@/components/CoreList';
import {
  isEmpty as NavigationIsEmpty,
  NavigationProps,
} from '@/components/CoreNavigation';
import { isEmpty as TeaserIsEmpty, TeaserProps } from '@/components/CoreTeaser';
import { isEmpty as TitleIsEmpty, TitleProps } from '@/components/CoreTitle';
import { isEmpty as TextIsEmpty, TextProps } from '@/components/CoreText';

export interface BreadcrumbComponentProperties
  extends BreadCrumbProps,
    MappedComponentProperties {}

export const BreadCrumbEditConfig: EditConfig<BreadcrumbComponentProperties> = {
  emptyLabel: 'Breadcrumb',
  isEmpty(props: BreadcrumbComponentProperties) {
    return BreadCrumbIsEmpty(props.items);
  },
};

export interface ButtonComponentProperties
  extends ButtonProps,
    MappedComponentProperties {}

export const ButtonEditConfig: EditConfig<ButtonComponentProperties> = {
  emptyLabel: 'Button',
  isEmpty(props: ButtonComponentProperties) {
    return ButtonIsEmpty(props.text);
  },
};

export interface DownloadComponentProperties
  extends DownloadProps,
    MappedComponentProperties {}

export const DownloadEditConfig: EditConfig<DownloadComponentProperties> = {
  emptyLabel: 'Download',
  isEmpty(props: DownloadComponentProperties) {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const { url, handleOnClick } = props;
    return DownloadIsEmpty({
      handleOnClick,
      url,
    });
  },
};

export interface EmbedComponentProperties
  extends EmbedProps,
    MappedComponentProperties {}

export const EmbedEditConfig: EditConfig<EmbedComponentProperties> = {
  emptyLabel: 'Embed',
  isEmpty(props: EmbedComponentProperties) {
    return EmbedIsEmpty(props);
  },
};

export interface ImageComponentProperties
  extends ImageProps,
    MappedComponentProperties {}

export const ImageEditConfig: EditConfig<ImageComponentProperties> = {
  emptyLabel: 'Image',
  isEmpty({ src }: ImageComponentProperties) {
    return ImageIsEmpty(src);
  },
};

export interface LanguageNavigationComponentProperties
  extends LanguageNavigationProps,
    MappedComponentProperties {}

export const LanguageNavigationEditConfig: EditConfig<LanguageNavigationComponentProperties> =
  {
    emptyLabel: 'Language Navigation',
    isEmpty(props: LanguageNavigationComponentProperties) {
      return LanguageNavigationIsEmpty(props);
    },
  };

export interface ListComponentProperties
  extends ListProps,
    MappedComponentProperties {}

export const ListEditConfig: EditConfig<ListComponentProperties> = {
  emptyLabel: 'List',

  isEmpty(props: ListComponentProperties) {
    return ListIsEmpty(props.items);
  },
};

export interface NavigationComponentProperties
  extends NavigationProps,
    MappedComponentProperties {}

export const NavigationEditConfig: EditConfig<NavigationComponentProperties> = {
  emptyLabel: 'Navigation',
  isEmpty(props: NavigationComponentProperties) {
    return NavigationIsEmpty(props);
  },
};

export interface TeaserComponentProperties
  extends TeaserProps,
    MappedComponentProperties {}

export const TeaserEditConfig: EditConfig<TeaserComponentProperties> = {
  emptyLabel: 'Teaser',
  isEmpty(props: TeaserComponentProperties) {
    return TeaserIsEmpty(props);
  },
};

export interface TitleComponentProperties
  extends TitleProps,
    MappedComponentProperties {}

export const TitleEditConfig: EditConfig<TitleComponentProperties> = {
  emptyLabel: 'Title',
  isEmpty(props: TitleComponentProperties) {
    return TitleIsEmpty(props.text);
  },
};

export interface TextComponentProperties
  extends TextProps,
    MappedComponentProperties {}

export const TextEditConfig: EditConfig<TextComponentProperties> = {
  emptyLabel: 'Text',
  isEmpty(props: TextComponentProperties) {
    return TextIsEmpty(props.text);
  },
};
