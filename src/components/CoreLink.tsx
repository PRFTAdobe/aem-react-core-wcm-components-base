import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HasBaseCssClass } from '@/components/ComponentProperties';

interface LinkProps extends HasBaseCssClass {
  className?: string;
  href?: string;
  isRouted?: boolean;
  target?: '_self' | '_blank' | '_parent' | '_top';

  [prop: string]: unknown;
}

const CoreLink = (props: LinkProps): React.JSX.Element => {
  // biome-ignore lint/correctness/noUnusedVariables: This is expected
  const { className, href, isRouted, baseCssClass, valid, ...otherProps } =
    props;
  const computedClassName = (
    baseCssClass = 'cmp-link',
    className = '',
    isActive = false,
  ) => {
    const computedClassName = [baseCssClass];
    if (isActive) {
      computedClassName.push(`${baseCssClass}--active`);
    }
    if (className.length) {
      computedClassName.push(className);
    }
    return computedClassName;
  };

  if (href === undefined || href.trim().length === 0) {
    return (
      <a
        className={computedClassName(baseCssClass, className, false).join(' ')}
        // biome-ignore lint/a11y/useValidAnchor: Pound sign is fine
        href="#"
        {...otherProps}
      />
    );
  }

  const isExternal = /^https?:\/\//.test(href);

  return isExternal || isRouted === false || AuthoringUtils.isInEditor() ? (
    <a
      className={computedClassName(baseCssClass, className, false).join(' ')}
      href={href}
      {...otherProps}
    />
  ) : (
    <NavLink
      className={({ isActive }) => {
        return computedClassName(baseCssClass, className, isActive).join(' ');
      }}
      to={href}
      {...otherProps}
    />
  );
};

export default CoreLink;
