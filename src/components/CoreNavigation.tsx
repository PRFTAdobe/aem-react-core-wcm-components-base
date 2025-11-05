import classNames from 'classnames';
import React from 'react';
import {
  CoreComponentModel,
  HasBaseCssClass,
  RoutedModel,
} from '@/components/ComponentProperties';
import CoreLink from '@/components/CoreLink';
import EditorPlaceHolder from '@/components/EditorPlaceHolder';

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

export const isEmpty = (props: { items?: NavigationItem[] }): boolean => {
  return props.items === null || props.items?.length === 0;
};

export const NavigationItem = (item: NavigationItem) => {
  return (
    <li
      className={classNames(
        `${item.baseCssClass}__item`,
        `${item.baseCssClass}__item--level-${item.level}`,
        {
          [`${item.baseCssClass}__item--active`]: item.active,
        },
      )}
    >
      <CoreLink
        aria-current={item.active && 'page'}
        className={`${item.baseCssClass}__item-link`}
        href={item.link.url}
        isRouted={item.routed}
        title={item.title}
      >
        {item.title}
      </CoreLink>
      {!!item.children && item.children.length > 0 && (
        <NavigationGroup {...item} baseCssClass={item.baseCssClass} />
      )}
    </li>
  );
};

export const NavigationGroup = (item: NavigationItem) => {
  return (
    <>
      {!!item.children && item.children.length > 0 && (
        <ul className={`${item.baseCssClass}__group`}>
          {item.children.map((child, index) => (
            <NavigationItem
              key={`${item.baseCssClass}__item-${index}`}
              {...child}
              baseCssClass={item.baseCssClass}
              index={index}
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

const CoreNavigation = (props: NavigationProps): React.JSX.Element | null => {
  return isEmpty(props) ? (
    props.isInEditor && !props.hidePlaceHolder ? (
      <EditorPlaceHolder componentTitle="Navigation" />
    ) : null
  ) : (
    <nav
      aria-label={props.accessibilityLabel}
      className={props.baseCssClass ?? 'cmp-navigation'}
      id={props.id}
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      <NavigationGroup
        {...{
          active: false,
          children: props.items,
          lastModified: 0,
          level: 0,
          link: {
            url: '',
          },
          path: '',
          routed: props.routed,
          title: '',
        }}
        baseCssClass={props.baseCssClass ?? 'cmp-navigation'}
      />
    </nav>
  );
};

export default CoreNavigation;
