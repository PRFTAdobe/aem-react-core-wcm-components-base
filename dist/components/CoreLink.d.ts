import { default as React } from 'react';
import { HasBaseCssClass } from './ComponentProperties';
interface LinkProps extends HasBaseCssClass {
    className?: string;
    href?: string;
    isRouted?: boolean;
    target?: '_self' | '_blank' | '_parent' | '_top';
    [prop: string]: unknown;
}
declare const CoreLink: (props: LinkProps) => React.JSX.Element;
export default CoreLink;
