import React from 'react';
import {
  CoreComponentModel,
  RoutedModel,
} from '@/components/ComponentProperties';
import CoreLink from '@/components/CoreLink';
import EditorPlaceHolder from '@/components/EditorPlaceHolder';

export interface TitleProps extends CoreComponentModel, RoutedModel {
  link?: {
    url: string;
    valid?: boolean;
  };
  linkDisabled: boolean;
  nested?: boolean;
  text: string;
  type?: string;
}

export const isEmpty = (text?: string): boolean => {
  return text === null || text?.trim().length === 0;
};

const bemModifierPrefix = (props: TitleProps) => (props.nested ? '-' : '__');

const TitleLink = (props: TitleProps) => {
  return (
    <CoreLink
      className={`${props.baseCssClass}${bemModifierPrefix(props)}link`}
      href={props.link?.url}
      isRouted={props.routed}
    >
      {props.text}
    </CoreLink>
  );
};

const TitleContents = (props: TitleProps) => {
  if (!props.linkDisabled) {
    return <TitleLink {...props} />;
  }

  return <>{props.text}</>;
};

const CoreTitle = (props: TitleProps): React.JSX.Element | null => {
  return isEmpty(props.text) ? (
    props.isInEditor && !props.hidePlaceHolder ? (
      <EditorPlaceHolder componentTitle="Title" />
    ) : null
  ) : (
    <div className={props.baseCssClass ?? 'cmp-title'}>
      {React.createElement(
        props.type ?? 'h3',
        {
          className: `${props.baseCssClass ?? 'cmp-title'}${bemModifierPrefix(props)}text`,
        },
        <TitleContents {...props} />,
      )}
    </div>
  );
};

export default CoreTitle;
