import React from 'react';
import classNames from 'classnames';
import {
  CoreComponentModel,
  HasBaseCssClass,
  RoutedModel,
} from '@/components/ComponentProperties';
import CoreLink from '@/components/CoreLink';
import EditorPlaceHolder from '@/components/EditorPlaceHolder';
import './CoreBreadCrumb.css';
import { MappedComponentProperties } from '@adobe/aem-react-editable-components';

interface BreadCrumbLink {
  attributes?: object;
  url: string;
  valid?: boolean;
}

export interface BreadCrumbItem extends RoutedModel, HasBaseCssClass {
  active: boolean;
  index?: number;
  link: BreadCrumbLink;
  navigable?: boolean;
  title: string;
}

export interface BreadCrumbProps
  extends CoreComponentModel,
    RoutedModel,
    MappedComponentProperties {
  ariaLabel: string;
  items: BreadCrumbItem[];
}

export const isEmpty = (props: { items: BreadCrumbItem[] }) => {
  return props.items === null || props.items.length === 0;
};

const BreadCrumbSpan = ({ title }: { title: string }) => (
  <span itemProp="name">{title}</span>
);

const BreadCrumbLink = ({
  baseCssClass,
  link,
  routed,
  title,
}: BreadCrumbItem) => {
  const { url, ...otherLinkProps } = link;
  return (
    <CoreLink
      className={`${baseCssClass}__item-link`}
      href={url}
      isRouted={routed ?? true}
      itemProp="item"
      {...otherLinkProps}
    >
      <BreadCrumbSpan title={title} />
    </CoreLink>
  );
};

const BreadCrumbListItem = (crumbItem: BreadCrumbItem) => {
  const contentIndex: string = crumbItem.index
    ? crumbItem.index.toString(2)
    : 'noindex';

  return (
    <li
      className={classNames(`${crumbItem.baseCssClass}__item`, {
        [`${crumbItem.baseCssClass}__item--active`]: crumbItem.active,
      })}
      itemProp="itemListElement"
      itemScope
      itemType="http://schema.org/ListItem"
    >
      {!crumbItem.active && <BreadCrumbLink {...crumbItem} />}
      {crumbItem.active && <BreadCrumbSpan title={crumbItem.title} />}
      <meta content={contentIndex} itemProp="position" />
    </li>
  );
};

const CoreBreadCrumb = ({
  ariaLabel,
  hidePlaceHolder,
  id,
  isInEditor,
  items,
  baseCssClass = 'cmp-breadcrumb',
}: BreadCrumbProps): React.JSX.Element | null => {
  return isEmpty({ items }) ? (
    isInEditor && !hidePlaceHolder ? (
      <EditorPlaceHolder componentTitle="Breadcrumb" />
    ) : null
  ) : (
    <nav
      aria-label={ariaLabel || 'BreadCrumb'}
      className={baseCssClass}
      id={id}
    >
      <ol
        className={`${baseCssClass}__list`}
        itemScope
        itemType="http://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => (
          <BreadCrumbListItem
            {...item}
            baseCssClass={baseCssClass}
            index={index}
            key={`crumbitem-${index}`}
          />
        ))}
      </ol>
    </nav>
  );
};

export default CoreBreadCrumb;
