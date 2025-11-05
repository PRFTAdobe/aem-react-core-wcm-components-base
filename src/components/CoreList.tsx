import { format } from 'date-and-time';
import React from 'react';
import { CoreComponentModel, HasBaseCssClass, RoutedModel } from '@/components/ComponentProperties';
import CoreLink from '@/components/CoreLink';
import EditorPlaceHolder from '@/components/EditorPlaceHolder';
import './CoreList.css';
import classNames from 'classnames';
import CoreTeaser from '@/components/CoreTeaser';

export interface ListItemProps extends RoutedModel, HasBaseCssClass {
  dateFormatString?: string;
  description?: string;
  index?: number;
  lastModified?: number;
  lastModifiedFormatted?: string;
  link?: {
    url: string;
    valid?: boolean;
  };
  linkItems?: boolean;
  path: string;
  showDescription?: boolean;
  showModificationDate?: boolean;
  title: string;
}

export interface ListProps extends CoreComponentModel, RoutedModel {
  dateFormatString: string;
  displayItemAsTeaser?: boolean;
  items: ListItemProps[];
  linkItems: boolean;
  showDescription: boolean;
  showModificationDate: boolean;
}

export const isEmpty = (items: ListItemProps[]): boolean => {
  return items === null || items.length === 0;
};

const ListItemModificationDate = (item: ListItemProps) => {
  const dateStringToDisplay = item.lastModifiedFormatted
    ? item.lastModifiedFormatted
    : // biome-ignore lint/style/noNestedTernary: This is fine
      item.lastModified && item.dateFormatString
      ? format(new Date(item.lastModified), item.dateFormatString.toUpperCase())
      : '';

  return (
    <span className={`${item.baseCssClass}__item-date`}>
      {dateStringToDisplay}
    </span>
  );
};

const ListItemContent = (item: ListItemProps) => {
  return (
    <>
      <span className={`${item.baseCssClass}__item-title`}>{item.title}</span>
      {item.showModificationDate && <ListItemModificationDate {...item} />}
    </>
  );
};

const ListAnchor = (item: ListItemProps) => {
  return (
    <CoreLink
      className={`${item.baseCssClass}__item-link`}
      href={item.link?.url}
      isRouted={item.routed}
    >
      <ListItemContent {...item} />
    </CoreLink>
  );
};

const ListItemDescription = (item: ListItemProps) => {
  return (
    <span className={`${item.baseCssClass}__item-description`}>
      {item.description}
    </span>
  );
};

const ListItem = (item: ListItemProps) => {
  return (
    <li className={`${item.baseCssClass}__item`}>
      <article>
        {item.linkItems && !!item.link?.url && <ListAnchor {...item} />}
        {!item.linkItems && <ListItemContent {...item} index={item.index} />}
        {item.showDescription && <ListItemDescription {...item} />}
      </article>
    </li>
  );
};

const CoreList = (props: ListProps): React.JSX.Element | null => {
  return isEmpty(props.items) ? (
    props.isInEditor && !props.hidePlaceHolder ? (
      <EditorPlaceHolder componentTitle="List" />
    ) : null
    // biome-ignore lint/style/noNestedTernary: This is fine
  ) : props.displayItemAsTeaser ? (
    <div
      className={classNames(
        props.baseCssClass ?? 'cmp-list',
        `${props.baseCssClass ?? 'cmp-list'}--as-teasers`,
      )}
      id={props.id}
    >
      {props.items.map((item, index) => (
        <CoreTeaser
          key={`cmp-list-${index}`}
          {...{
            ...item,
            actions: [],
            actionsEnabled: false,
            imageAlt: '',
            imageLinkHidden: true,
            imagePath: '',
            isInEditor: props.isInEditor,
            titleLinkHidden: false,
          }}
        />
      ))}
    </div>
  ) : (
    <ul className={props.baseCssClass ?? 'cmp-list'} id={props.id}>
      {props.items.map((item, index) => (
        <ListItem
          {...{
            ...item,
            baseCssClass: props.baseCssClass ?? 'cmp-list',
            dateFormatString: props.dateFormatString,
            linkItems: props.linkItems,
            routed:
              typeof item.routed === 'boolean' ? item.routed : props.routed,
            showDescription: props.showDescription,
            showModificationDate: props.showModificationDate,
          }}
          index={index}
          key={`cmp-list-${index}`}
        />
      ))}
    </ul>
  );
};

export default CoreList;
