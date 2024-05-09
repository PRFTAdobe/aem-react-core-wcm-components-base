import React from 'react';
import classNames from 'classnames';
import { ComponentMapping } from '@adobe/aem-react-editable-components';
import {
  CoreComponentModel,
  RoutedModel,
} from '@/components/ComponentProperties';
import EditorPlaceHolder from '@/components/EditorPlaceHolder';
import CoreButton from '@/components/CoreButton';
import './CoreDownload.css';

export interface DownloadProps extends CoreComponentModel, RoutedModel {
  actionText?: string;
  componentMapping?: typeof ComponentMapping;
  cqType?: string;
  description?: string;
  displayFilename: boolean;
  displayFormat: boolean;
  displaySize: boolean;
  extension?: string;
  filename?: string;
  format?: string;
  size?: string;
  title: string;
  titleType: string;
  url?: string;

  handleOnClick?(event: React.MouseEvent): void;
}

export const isEmpty = ({
  url,
  handleOnClick,
}: {
  handleOnClick?(event: React.MouseEvent): void;
  url?: string;
}) => {
  return (
    (typeof url === 'undefined' || url === null || url?.length === 0) &&
    (typeof handleOnClick === 'undefined' || handleOnClick === null)
  );
};

const getDownloadHref = ({ url }: { url?: string }) =>
  !!url && url.length > 0 ? url : '#';

const renderProperty = (
  label: string,
  content: string | undefined,
  cssClassModifier: string,
  baseCssClass?: string,
) => {
  return (
    <div
      className={classNames(
        `${baseCssClass}__property`,
        `${baseCssClass}__property--${cssClassModifier}`,
      )}
    >
      <dt className={`${baseCssClass}__property-label`}>{label}</dt>
      <dd className={`${baseCssClass}__property-content`}>{content}</dd>
    </div>
  );
};

const DownloadHeadingContent = ({
  baseCssClass,
  title,
  url,
  handleOnClick,
}: {
  baseCssClass?: string;
  handleOnClick?(event: React.MouseEvent): void;
  title: string;
  url?: string;
}) => {
  const onClick = (event: React.MouseEvent) => {
    handleOnClick && handleOnClick(event);
  };

  return (
    <>
      {!!url ||
        (!!handleOnClick && (
          <a
            className={`${baseCssClass}__title-link`}
            href={getDownloadHref({ url })}
            onClick={onClick}
          >
            {title}
          </a>
        ))}
      {!url && <> {title} </>}
    </>
  );
};

const DownloadHeadingElement = ({
  handleOnClick,
  url,
  baseCssClass,
  title,
  titleType = 'h3',
}: {
  baseCssClass?: string;
  handleOnClick?(event: React.MouseEvent): void;
  title: string;
  titleType: string;
  url?: string;
}) => {
  return React.createElement(
    `${titleType}`,
    {
      className: `${baseCssClass}__title`,
    },
    <DownloadHeadingContent
      {...{
        baseCssClass,
        handleOnClick,
        title,
        url,
      }}
    />,
  );
};

const DownloadDetails = ({
  baseCssClass,
  displayFilename,
  displayFormat,
  displaySize,
  filename,
  format,
  size,
}: {
  baseCssClass?: string;
  displayFilename: boolean;
  displayFormat: boolean;
  displaySize: boolean;
  filename?: string;
  format?: string;
  size?: string;
}) => {
  return (
    <dl className={`${baseCssClass}__properties`}>
      {displayFilename &&
        renderProperty('Filename', filename, 'filename', baseCssClass)}
      {displaySize && renderProperty('Size', size, 'size', baseCssClass)}
      {displayFormat &&
        renderProperty('Format', format, 'format', baseCssClass)}
    </dl>
  );
};

const DownloadDescription = ({
  baseCssClass,
  description,
}: {
  baseCssClass?: string;
  description?: string;
}) => {
  const html: string = String(description) || '';
  return (
    <div
      className={`${baseCssClass}__description`}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
};

const DownloadLink = ({
  actionText,
  baseCssClass,
  cqType,
  componentMapping,
  handleOnClick,
  isInEditor,
  url,
}: {
  actionText?: string;
  baseCssClass?: string;
  componentMapping?: typeof ComponentMapping;
  cqType?: string;
  handleOnClick?(event: React.MouseEvent): void;
  isInEditor: boolean;
  url?: string;
}) => {
  const componentMappingSingleton = componentMapping ?? ComponentMapping;
  let Button = CoreButton;
  if (cqType?.endsWith('/download')) {
    Button = componentMappingSingleton.get(
      cqType.replace('/download', '/button'),
    );
  }

  const onClick = (event: React.MouseEvent) => {
    handleOnClick && handleOnClick(event);
  };

  return (
    <Button
      {...{
        buttonLink: { url: url ?? '#' },
        className: `${baseCssClass}__action`,
        handleOnClick: onClick,
        isInEditor: isInEditor,
        text: actionText,
      }}
    />
  );
};

const CoreDownload = ({
  actionText,
  componentMapping,
  cqType,
  description,
  filename,
  format,
  handleOnClick,
  hidePlaceHolder,
  id,
  isInEditor,
  size,
  title,
  titleType,
  url,
  baseCssClass = 'cmp-download',
  displayFilename = false,
  displayFormat = false,
  displaySize = false,
}: DownloadProps): React.JSX.Element | null => {
  const displayDownloadDetails =
    displayFilename || displaySize || displayFormat;
  return isEmpty({ handleOnClick, url }) ? (
    isInEditor && !hidePlaceHolder ? (
      <EditorPlaceHolder componentTitle="Download" />
    ) : null
  ) : (
    <div
      className={classNames(baseCssClass, { 'cq-dd-file': isInEditor })}
      id={id}
    >
      {!!title && (
        <DownloadHeadingElement
          {...{
            baseCssClass,
            handleOnClick,
            title,
            titleType,
            url,
          }}
        />
      )}
      {!!description && (
        <DownloadDescription {...{ baseCssClass, description }} />
      )}
      {displayDownloadDetails && (
        <DownloadDetails
          {...{
            baseCssClass,
            displayFilename,
            displayFormat,
            displaySize,
            filename,
            format,
            size,
          }}
        />
      )}
      <DownloadLink
        {...{
          actionText,
          baseCssClass,
          componentMapping,
          cqType,
          handleOnClick,
          isInEditor,
          url,
        }}
      />
    </div>
  );
};

export default CoreDownload;
