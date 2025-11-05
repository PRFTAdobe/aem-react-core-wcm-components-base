import classNames from 'classnames';
import React from 'react';
import CoreLink from '@/components/CoreLink';
import {
  NavigationGroup,
  NavigationItem,
  NavigationProps,
} from '@/components/CoreNavigation';
import EditorPlaceHolder from '@/components/EditorPlaceHolder';

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

export const isEmpty = (props: { items?: LanguageNavigationItem[] }) => {
  return props.items === null || props.items?.length === 0;
};

const LanguageNavigationLink = (props: LanguageNavigationItem) => {
  if (props.level > 0) {
    return (
      <CoreLink
        className={`${props.baseCssClass}__item-link`}
        href={props.link.url}
        hrefLang={props.language}
        isRouted={props.routed}
        lang={props.language}
        rel="alternate"
        title={props.title}
      >
        {props.title}
      </CoreLink>
    );
  } else {
    return (
      <span
        className={`${props.baseCssClass}__item-title`}
        lang={props.language}
      >
        {props.title}
      </span>
    );
  }
};

const LanguageNavigationItem = (item: LanguageNavigationItem) => {
  return (
    <li
      className={classNames(
        `${item.baseCssClass}__item`,
        `${item.baseCssClass}__item--level-${item.level}`,
        `${item.baseCssClass}__item--countrycode-${item.country}`,
        `${item.baseCssClass}__item--langcode-${item.language}`,
        {
          [`${item.baseCssClass}__item--active`]: item.active,
        },
      )}
    >
      <LanguageNavigationLink {...item} />
      {!!item.children && item.children.length > 0 && (
        <NavigationGroup {...item} />
      )}
    </li>
  );
};

const LanguageNavigationGroup = (item: LanguageNavigationItem) => {
  return (
    <>
      {!!item.children && item.children.length > 0 && (
        <ul className={`${item.baseCssClass}__group`}>
          {item.children.map((child, index) => (
            <LanguageNavigationItem
              {...child}
              baseCssClass={item.baseCssClass}
              index={index}
              key={`${item.baseCssClass}__item-${index}`}
              routed={
                typeof child.routed === 'boolean' ? child.routed : item.routed
              }
            />
          ))}
        </ul>
      )}
    </>
  );
};

const CoreLanguageNavigation = (
  props: LanguageNavigationProps,
): React.JSX.Element | null => {
  return isEmpty(props) ? (
    props.isInEditor && !props.hidePlaceHolder ? (
      <EditorPlaceHolder componentTitle="Language Navigation" />
    ) : null
  ) : (
    <nav
      aria-label={props.accessibilityLabel}
      className={props.baseCssClass ?? 'cmp-languagenavigation'}
      id={props.id}
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      <LanguageNavigationGroup
        {...{
          active: false,
          children: props.items,
          country: '',
          language: '',
          lastModified: 0,
          level: 0,
          link: {
            url: '',
          },
          locale: '',
          path: '',
          routed: props.routed,
          title: '',
        }}
        baseCssClass={props.baseCssClass ?? 'cmp-languagenavigation'}
      />
    </nav>
  );
};

export default CoreLanguageNavigation;
