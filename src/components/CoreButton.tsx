import classNames from 'classnames';
import React from 'react';
import {
  CoreComponentModel,
  RoutedModel,
} from '@/components/ComponentProperties';
import CoreLink from '@/components/CoreLink';
import EditorPlaceHolder from '@/components/EditorPlaceHolder';
import './CoreButton.css';

export interface ButtonProps extends CoreComponentModel, RoutedModel {
  ariaLabel?: string;
  buttonLink?: {
    url: string;
    valid?: boolean;
  };
  className?: string;
  icon?: string;
  text?: string;
  type?: 'submit' | 'reset' | 'button';
  routed?: boolean;

  handleOnClick?(event: React.MouseEvent): void;
}

export const isEmpty = (text?: string) => {
  return typeof text === 'undefined' || text === null || text?.length === 0;
};

const ButtonContent = ({ baseCssClass, icon, text }: ButtonProps) => {
  return (
    <>
      {icon && (
        <span
          className={classNames(
            `${baseCssClass}__icon`,
            `${baseCssClass}__icon--${icon}`,
          )}
        ></span>
      )}
      <span className={`${baseCssClass}__text`}>{text}</span>
    </>
  );
};

const CoreButton = ({
  ariaLabel,
  buttonLink,
  className,
  hidePlaceHolder,
  id,
  icon,
  isInEditor,
  text,
  handleOnClick,
  routed,
  baseCssClass = 'cmp-button',
  type = 'button',
}: ButtonProps): React.JSX.Element | null => {
  const onClick = (event: React.MouseEvent) => {
    if (handleOnClick) {
      handleOnClick(event);
    }
  };

  const isLink = !!buttonLink?.url;

  if (isEmpty(text)) {
    if (isInEditor && !hidePlaceHolder) {
      return <EditorPlaceHolder componentTitle="Button" />;
    } else {
      return null;
    }
  } else if (isLink) {
    return (
      <CoreLink
        aria-label={ariaLabel}
        className={classNames(baseCssClass, className)}
        href={buttonLink?.url}
        id={id}
        isRouted={routed}
        onClick={onClick}
      >
        <ButtonContent
          baseCssClass={baseCssClass}
          icon={icon}
          isInEditor={isInEditor}
          text={text}
        />
      </CoreLink>
    );
  } else {
    return (
      <button
        className={classNames(baseCssClass, className)}
        id={id}
        onClick={onClick}
        type={type}
      >
        <ButtonContent
          baseCssClass={baseCssClass}
          icon={icon}
          isInEditor={isInEditor}
          text={text}
        />
      </button>
    );
  }
};

export default CoreButton;
