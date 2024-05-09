import React, { CSSProperties } from 'react';

import classNames from 'classnames';
import {
  CoreComponentModel,
  RoutedModel,
} from '@/components/ComponentProperties';
import CoreLink from '@/components/CoreLink';
import EditorPlaceHolder from '@/components/EditorPlaceHolder';
import './CoreImage.css';

export interface ImageProps extends CoreComponentModel, RoutedModel {
  alt: string;
  displayPopupTitle?: boolean;
  link?: string;
  src: string;
  title?: string;
  width?: string;
}

export const isEmpty = (src: string) => {
  return !src || src.trim().length === 0;
};

const getAssetMaxInlineSize = (width: string) => {
  let units = 'px';
  if (/^(\d+|(\.\d+))(\.\d+)?%$/.test(width)) {
    units = '';
  }
  return {
    '--asset-max-inline-size': `${width}${units}`,
  };
};

const ImageInnerContents = (props: ImageProps) => {
  return (
    <>
      <img
        alt={props.alt}
        className={classNames(`${props.baseCssClass}__image`, {
          'cmp-asset': typeof props.width !== 'undefined',
        })}
        src={props.src}
      />
      {!!props.title && (
        <span className={`${props.baseCssClass}__title`} itemProp="caption">
          {props.title}
        </span>
      )}
      {props.displayPopupTitle && !!props.title && (
        <meta content={props.title} itemProp="caption" />
      )}
    </>
  );
};

const ImageContents = ({
  alt,
  baseCssClass,
  isInEditor,
  link,
  routed,
  src,
  title,
  width,
}: ImageProps) => {
  if (link && link.trim().length > 0) {
    return (
      <CoreLink
        className={`${baseCssClass}__link`}
        href={link}
        isRouted={routed}
      >
        <ImageInnerContents
          {...{
            alt,
            baseCssClass,
            isInEditor,
            link,
            routed,
            src,
            title,
            width,
          }}
        />
      </CoreLink>
    );
  }
  return (
    <ImageInnerContents
      {...{
        alt,
        baseCssClass,
        isInEditor,
        link,
        routed,
        src,
        title,
        width,
      }}
    />
  );
};

const CoreImage = ({
  alt,
  baseCssClass = 'cmp-image',
  hidePlaceHolder,
  id,
  isInEditor = false,
  link,
  routed,
  src,
  title,
  width,
}: ImageProps): React.JSX.Element | null => {
  const attributes: {
    className: string;
    id?: string;
    style?: CSSProperties;
  } = {
    className: classNames(baseCssClass, { 'cq-dd-image': isInEditor }),
    id,
  };

  if (width) {
    attributes.style = getAssetMaxInlineSize(width) as CSSProperties;
  }
  return isEmpty(src) ? (
    isInEditor && !hidePlaceHolder ? (
      <EditorPlaceHolder componentTitle="Image" />
    ) : null
  ) : (
    <div {...attributes}>
      <ImageContents
        {...{
          alt,
          baseCssClass,
          isInEditor,
          link,
          routed,
          src,
          title,
          width,
        }}
      />
    </div>
  );
};

export default CoreImage;
