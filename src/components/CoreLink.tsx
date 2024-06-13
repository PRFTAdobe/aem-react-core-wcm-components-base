import { NavLink } from 'react-router-dom';
import React from 'react';
import { HasBaseCssClass } from '@/components/ComponentProperties';
import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';

interface LinkProps extends HasBaseCssClass {
  className?: string;
  href?: string;
  isRouted?: boolean;
  target?: '_self' | '_blank' | '_parent' | '_top';

  [prop: string]: unknown;
}

const CoreLink = (props: LinkProps): React.JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        href={'#'}
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
