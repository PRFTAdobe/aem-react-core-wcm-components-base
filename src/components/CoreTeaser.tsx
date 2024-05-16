import React from 'react';
import classNames from 'classnames';
import { ComponentMapping } from '@adobe/aem-react-editable-components';
import {
  CoreComponentModel,
  RoutedModel,
} from '@/components/ComponentProperties';
import CoreButton from '@/components/CoreButton';
import CoreImage from '@/components/CoreImage';
import EditorPlaceHolder from '@/components/EditorPlaceHolder';
import CoreTitle from '@/components/CoreTitle';
import './CoreTeaser.css';

interface TeaserAction extends RoutedModel {
  link: {
    url: string;
    valid?: boolean;
  };
  title: string;
}

export interface TeaserProps extends CoreComponentModel, RoutedModel {
  actions: TeaserAction[];
  actionsEnabled: boolean;
  componentMapping?: typeof ComponentMapping;
  cqType?: string;
  description?: string;
  imageAlt: string;
  imageLinkHidden: boolean;
  imagePath: string;
  link?: {
    url: string;
    valid?: boolean;
  };
  pretitle?: string;
  title: string;
  titleLinkHidden: boolean;
  titleType?: string;
}

export const isEmpty = (props: TeaserProps): boolean => {
  return (
    !props.title &&
    !props.imagePath &&
    !props.description &&
    props.actions.length === 0
  );
};

const TeaserImage = (props: TeaserProps) => {
  return (
    <div className={`${props.baseCssClass}__image`}>
      <CoreImage
        alt={props.imageAlt}
        isInEditor={props.isInEditor}
        src={props.imagePath}
      />
    </div>
  );
};

const TeaserPreTitle = (props: TeaserProps) => (
  <div className={`${props.baseCssClass}__pretitle`}>{props.pretitle}</div>
);

const TeaserTitle = (props: TeaserProps) => (
  <CoreTitle
    baseCssClass={`${props.baseCssClass}__title`}
    isInEditor={props.isInEditor}
    link={props.link}
    linkDisabled={false}
    nested={true}
    routed={props.routed}
    text={props.title}
    type={props.titleType ?? 'h2'}
  />
);

const TeaserDescription = (props: TeaserProps) => {
  const text: string = props.description!;
  return (
    <div
      className={`${props.baseCssClass}__description`}
      dangerouslySetInnerHTML={{ __html: text }}
    ></div>
  );
};

const TeaserActions = (props: TeaserProps) => {
  return (
    <div className={`${props.baseCssClass}__action-container`}>
      {props.actions.map((action, index) => {
        const componentMappingSingleton =
          props.componentMapping ?? ComponentMapping;
        let Button = CoreButton;
        if (props.cqType?.endsWith('/teaser')) {
          Button = componentMappingSingleton.get(
            props.cqType.replace('/teaser', '/button'),
          );
        }
        return (
          <Button
            buttonLink={action.link}
            className={`${props.baseCssClass}__action-link`}
            isInEditor={props.isInEditor}
            key={`link-${index}`}
            routed={props.routed}
            text={props.title}
          ></Button>
        );
      })}
    </div>
  );
};

const CoreTeaser = (props: TeaserProps): React.JSX.Element | null => {
  const propsWithBaseCssClass = {
    ...props,
    baseCssClass: props.baseCssClass ?? 'cmp-teaser',
  };
  return isEmpty(props) ? (
    props.isInEditor && !props.hidePlaceHolder ? (
      <EditorPlaceHolder componentTitle="Teaser" />
    ) : null
  ) : (
    <div
      className={classNames(
        propsWithBaseCssClass.baseCssClass,
        {
          [`${propsWithBaseCssClass.baseCssClass}--with-image`]:
            props.imagePath,
        },
        {
          'cq-dd-image': propsWithBaseCssClass.isInEditor,
        },
      )}
      id={props.id}
    >
      <section>
        <div className={`${propsWithBaseCssClass.baseCssClass}__content`}>
          {props.pretitle && <TeaserPreTitle {...propsWithBaseCssClass} />}
          {props.title && <TeaserTitle {...propsWithBaseCssClass} />}
          {props.description && (
            <TeaserDescription {...propsWithBaseCssClass} />
          )}
          {props.actions.length > 0 && propsWithBaseCssClass.actionsEnabled && (
            <TeaserActions {...propsWithBaseCssClass} />
          )}
        </div>
        {props.imagePath && <TeaserImage {...propsWithBaseCssClass} />}
      </section>
    </div>
  );
};

export default CoreTeaser;
