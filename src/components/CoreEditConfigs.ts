import {
  EditConfig,
  MappedComponentProperties,
} from '@adobe/aem-react-editable-components';
import {
  BreadCrumbItem,
  isEmpty as BreadCrumbIsEmpty,
} from '@/components/CoreBreadCrumb';
import { ButtonProps, isEmpty as ButtonIsEmpty } from '@/components/CoreButton';
import { isEmpty as DownloadIsEmpty } from '@/components/CoreDownload';
import React from 'react';
import {
  isEmpty as EmbedIsEmpty,
  OEmbedResponse,
  YouTubeProps,
} from '@/components/CoreEmbed';
import { isEmpty as ImageIsEmpty } from '@/components/CoreImage';
import {
  isEmpty as LanguageNavigationIsEmpty,
  LanguageNavigationItem,
} from '@/components/CoreLanguageNavigation';
import {
  isEmpty as ListItemIsEmpty,
  ListItemProps,
} from '@/components/CoreList';
import {
  isEmpty as NavigationIsEmpty,
  NavigationItem,
} from '@/components/CoreNavigation';
import { isEmpty as TeaserIsEmpty, TeaserProps } from '@/components/CoreTeaser';
import { isEmpty as TitleIsEmpty } from '@/components/CoreTitle';
import { isEmpty as TextIsEmpty } from '@/components/CoreText';

interface BreadcrumbComponentProperties extends MappedComponentProperties {
  items: BreadCrumbItem[];
}

export const BreadcrumbEditConfig: EditConfig<BreadcrumbComponentProperties> = {
  emptyLabel: 'Breadcrumb',
  isEmpty(props: { items: BreadCrumbItem[] }) {
    return BreadCrumbIsEmpty(props);
  },
};

interface ButtonComponentProperties extends MappedComponentProperties {
  text: string;
}

export const ButtonEditConfig: EditConfig<ButtonComponentProperties> = {
  emptyLabel: 'Button',
  isEmpty(props: ButtonProps) {
    return ButtonIsEmpty(props.text);
  },
};

interface DownloadComponentProperties extends MappedComponentProperties {
  url?: string;

  handleOnClick?(event: React.MouseEvent): void;
}

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

interface EmbedComponentProperties extends MappedComponentProperties {
  result?: OEmbedResponse;
  html?: string;
  youTubeProps?: YouTubeProps;
  type: 'URL' | 'HTML' | 'EMBEDDABLE';
  url?: string;
}

export const EmbedEditConfig: EditConfig<EmbedComponentProperties> = {
  emptyLabel: 'Embed',
  isEmpty(props: EmbedComponentProperties) {
    return EmbedIsEmpty(props);
  },
};

interface ImageComponentProperties extends MappedComponentProperties {
  src: string;
}

export const ImageEditConfig: EditConfig<ImageComponentProperties> = {
  emptyLabel: 'Image',
  isEmpty({ src }: { src: string }) {
    return ImageIsEmpty(src);
  },
};

interface LanguageNavigationComponentProperties
  extends MappedComponentProperties {
  items?: LanguageNavigationItem[];
}

export const LanguageNavigationEditConfig: EditConfig<LanguageNavigationComponentProperties> =
  {
    emptyLabel: 'Language Navigation',
    isEmpty(props: { items?: LanguageNavigationItem[] }) {
      return LanguageNavigationIsEmpty(props);
    },
  };

interface ListComponentProperties extends MappedComponentProperties {
  items: ListItemProps[];
}

export const ListEditConfig: EditConfig<ListComponentProperties> = {
  emptyLabel: 'List',

  isEmpty(props: ListComponentProperties) {
    return ListItemIsEmpty(props.items);
  },
};

interface NavigationComponentProperties extends MappedComponentProperties {
  items: NavigationItem[];
}

export const NavigationEditConfig: EditConfig<NavigationComponentProperties> = {
  emptyLabel: 'Navigation',
  isEmpty(props: { items: NavigationItem[] }) {
    return NavigationIsEmpty(props);
  },
};

interface TeaserComponentProperties
  extends TeaserProps,
    MappedComponentProperties {}

export const TeaserEditConfig: EditConfig<TeaserComponentProperties> = {
  emptyLabel: 'Teaser',
  isEmpty(props: TeaserComponentProperties) {
    return TeaserIsEmpty(props);
  },
};

interface TitleComponentProperties extends MappedComponentProperties {
  text: string;
}

export const TitleEditConfig: EditConfig<TitleComponentProperties> = {
  emptyLabel: 'Title',
  isEmpty(props: TitleComponentProperties) {
    return TitleIsEmpty(props.text);
  },
};

interface TextComponentProperties extends MappedComponentProperties {
  text: string;
}

export const TextEditConfig: EditConfig<TextComponentProperties> = {
  emptyLabel: 'Text',
  isEmpty(props: TextComponentProperties) {
    return TextIsEmpty(props.text);
  },
};
