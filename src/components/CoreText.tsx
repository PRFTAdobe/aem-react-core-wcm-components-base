import React from 'react';
import parse, { DOMNode, domToReact, Element } from 'html-react-parser';
import DOMPurify from 'dompurify';
import CoreLink from '@/components/CoreLink';
import {
  CoreComponentModel,
  RoutedModel,
} from '@/components/ComponentProperties';
import EditorPlaceHolder from '@/components/EditorPlaceHolder';

export interface TextProps extends CoreComponentModel, RoutedModel {
  text?: string;
  richText?: boolean;
  cqPath?: string;
  id?: string;
}

export const isEmpty = (text?: string): boolean => {
  return text === null || text?.length === 0;
};

const sanitize = (text: string) => DOMPurify.sanitize(text);

const CoreText = (props: TextProps): React.JSX.Element | null => {
  let { text } = props;
  if (props.richText) {
    const options = {
      replace(domNode: DOMNode) {
        if (domNode instanceof Element && domNode.tagName === 'a') {
          const { attribs } = domNode;
          const attributes: Record<string, unknown> = {
            ...attribs,
            className: attribs.class,
          };
          delete attributes.class;
          return (
            <CoreLink {...attributes}>
              {domToReact(domNode.children as DOMNode[], options)}
            </CoreLink>
          );
        }
      },
    };

    text = parse(sanitize(text!), options) as string;
  }
  return isEmpty(props.text) ? (
    props.isInEditor && !props.hidePlaceHolder ? (
      <EditorPlaceHolder componentTitle="Text" />
    ) : null
  ) : props.richText ? (
    <div
      className={props.baseCssClass ?? 'cmp-text'}
      data-rte-editelement={true}
      id={props.id}
    >
      {text}
    </div>
  ) : (
    <div className={props.baseCssClass ?? 'cmp-text'} id={props.id}>
      <p className="cmp-text__paragraph">{text}</p>
    </div>
  );
};

export default CoreText;
