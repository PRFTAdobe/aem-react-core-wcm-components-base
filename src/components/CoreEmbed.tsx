import classNames from 'classnames';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import React, { useEffect, useRef } from 'react';
import {
  CoreComponentModel,
  RoutedModel,
} from '@/components/ComponentProperties';
import EditorPlaceHolder from '@/components/EditorPlaceHolder';
import './CoreEmbed.css';

declare global {
  interface Window {
    PinUtils: {
      // eslint-disable-next-line @typescript-eslint/ban-types
      build?: Function;
    };
  }
}

export interface OEmbedResponse {
  processor?: string;
  options?: {
    pinId?: string;
    provider?: string;
    response?: {
      height?: string;
      html?: string;
      providerName?: string;
      providerUrl?: string;
      title?: string;
      type?: string;
      url?: string;
      width?: string;
    };
  };
}

export interface YouTubeProps {
  layout: string;
  youtubeAspectRatio: string;
  youtubeAutoPlay: boolean;
  youtubeHeight?: string;
  youtubeLoop: boolean;
  youtubeMute: boolean;
  youtubePlaysInline: boolean;
  youtubeRel: boolean;
  youtubeVideoId: string;
  youtubeWidth?: string;
}

export interface EmbedProps extends CoreComponentModel, RoutedModel {
  type: 'URL' | 'HTML' | 'EMBEDDABLE';
  result?: OEmbedResponse;
  url?: string;
  html?: string;
  youTubeProps?: YouTubeProps;
}

export const isEmpty = (props: EmbedProps) => {
  let isPropDefined = false;
  if (props.type === 'URL') {
    isPropDefined =
      typeof props.url !== 'undefined' &&
      typeof props.result?.processor !== 'undefined';
  } else if (props.type === 'EMBEDDABLE') {
    isPropDefined = typeof props.youTubeProps?.youtubeVideoId !== 'undefined';
  } else if (props.type === 'HTML') {
    isPropDefined = Boolean(props.html);
  }
  return !props || !isPropDefined;
};

const executeProcessorScript = (provider: string) => {
  let url;
  if (provider === 'Twitter') {
    url = '//platform.twitter.com/widgets.js';
  } else if (provider === 'Pinterest') {
    url = '//assets.pinterest.com/js/pinit.js';
  }

  if (url) {
    let processorScript = document.querySelector(`script[src="${url}"]`);

    if (!processorScript) {
      loadScript(url)
        .then(() => {
          if (typeof window.PinUtils?.build === 'function') {
            window.PinUtils.build();
          }
          processorScript = document.querySelector(`script[src="${url}"]`);
          (processorScript as HTMLScriptElement).dataset.loaded =
            true.toString();
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (
      (processorScript as HTMLScriptElement).dataset.loaded === 'true'
    ) {
      if (typeof window.PinUtils?.build === 'function') {
        window.PinUtils.build();
      }
    } else {
      processorScript.addEventListener('load', () => {
        if (typeof window.PinUtils?.build === 'function') {
          window.PinUtils.build();
        }
      });
    }
  }
};

const loadScript = (source: string, async = true, type = 'text/javascript') =>
  new Promise((resolve, reject) => {
    try {
      const scriptElement = document.createElement('script');
      scriptElement.type = type;
      scriptElement.async = async;
      scriptElement.src = source;

      scriptElement.addEventListener('load', () => {
        resolve({ status: true });
      });

      scriptElement.addEventListener('error', () => {
        const message = 'Failed to load the script ＄{FILE_URL}';
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({
          message,
          status: false,
        });
      });

      document.body.appendChild(scriptElement);
    } catch (error) {
      reject(error);
    }
  });

const getOEmbedURLResponseType = (result: OEmbedResponse) => {
  if (result?.options?.response) {
    const { response } = result.options;
    return response.type;
  }
  return undefined;
};

const getOEmbedLinkURL = (result: OEmbedResponse) => {
  if (result?.options?.response) {
    const response = result.options.response as {
      url: string;
    };
    return response.url;
  }
  return undefined;
};

const getOEmbedLinkTitle = (result: OEmbedResponse) => {
  if (result?.options?.response) {
    const response = result.options.response as {
      title: string;
    };
    return response.title;
  }
  return undefined;
};

const getOEmbedRichResponseHtml = (result: OEmbedResponse) => {
  if (result?.options?.response) {
    const { response } = result.options;
    return response.html;
  }
  return undefined;
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-member-access
const sanitize = (text: string) => DOMPurify.sanitize(text);

const youTubeSource = (youTubeProps: YouTubeProps) => {
  const videoId = youTubeProps?.youtubeVideoId;
  const autoPlay = youTubeProps?.youtubeAutoPlay;
  const loop = youTubeProps?.youtubeLoop;
  const mute = youTubeProps?.youtubeMute;
  const playsInline = youTubeProps?.youtubePlaysInline;
  const rel = youTubeProps?.youtubeRel;
  const youTubeUrl = `https://www.youtube.com/embed/${videoId}`;
  const paramsObj: Record<string, string> = {
    autoplay: `${+autoPlay}`,
    loop: `${+loop}`,
    mute: `${+mute}`,
    playlist: `${videoId}`,
    playsinline: `${+playsInline}`,
    rel: `${+rel}`,
  };
  const youTubeUrlParams = new URLSearchParams(paramsObj).toString();
  return `${youTubeUrl}?${youTubeUrlParams}`;
};

const EmbedContent = (props: EmbedProps) => {
  if (props.type === 'HTML') {
    return parse(sanitize(props.html!));
  } else if (props.type === 'EMBEDDABLE') {
    return props.youTubeProps?.layout === 'responsive' ? (
      <div
        className={`${props.baseCssClass}__embeddable-wrapper`}
        style={{
          paddingBottom:
            props.youTubeProps?.layout === 'responsive'
              ? `${props.youTubeProps?.youtubeAspectRatio}%`
              : 0,
        }}
      >
        <EmbedElement {...props} />
      </div>
    ) : (
      <EmbedElement {...props} />
    );
  } else if (props.type === 'URL') {
    return props.result?.processor === 'pinterest' ? (
      <a data-pin-build="doBuild" data-pin-do="embedPin" href={props.url}>
        {props.url}
      </a>
    ) : (
      <OEmbedElement {...props} />
    );
  }
};

const EmbedElement = (props: EmbedProps) => {
  return (
    <iframe
      {...{
        allow: props.youTubeProps?.youtubeAutoPlay
          ? 'autoplay; fullscreen;'
          : 'fullscreen;',
        allowFullScreen: true,
        'aria-label': 'YouTube Video',
        className: `${props.baseCssClass}__embeddable-iframe`,
        frameBorder: 0,
        height:
          props.youTubeProps?.layout === 'responsive'
            ? '100%'
            : props.youTubeProps?.youtubeHeight,
        src: youTubeSource(props.youTubeProps!),
        title: 'YouTube Video',
        type: 'text/html',
        width:
          props.youTubeProps?.layout === 'responsive'
            ? '100%'
            : props.youTubeProps?.youtubeWidth,
      }}
    />
  );
};

const EmbedImage = (result: OEmbedResponse) => {
  return result?.options?.response ? (
    // biome-ignore lint/a11y/useAltText: This is fine.
    <img
      {...{
        alt: result?.options?.response?.title,
        height: result?.options?.response?.height,
        src: result?.options?.response?.url,
        title: result?.options?.response?.title,
        width: result?.options?.response?.width,
      }}
    />
  ) : null;
};

const OEmbedElement = (props: EmbedProps) => {
  const oEmbedURLResponseType = getOEmbedURLResponseType(props.result!);
  if (oEmbedURLResponseType === 'photo') {
    return <EmbedImage {...props.result} />;
  } else if (oEmbedURLResponseType === 'link') {
    return (
      <a href={getOEmbedLinkURL(props.result!)}>
        {getOEmbedLinkTitle(props.result!)}
      </a>
    );
  } else if (oEmbedURLResponseType === 'video') {
    return getOEmbedRichResponseHtml(props.result!)
      ? parse(getOEmbedRichResponseHtml(props.result!)!)
      : null;
  } else if (oEmbedURLResponseType === 'rich') {
    return getOEmbedRichResponseHtml(props.result!)
      ? parse(sanitize(getOEmbedRichResponseHtml(props.result!)!))
      : null;
  }
};

const CoreEmbed = (props: EmbedProps): React.JSX.Element | null => {
  const baseCssClass = props.baseCssClass ?? 'cmp-embed';
  const propsWithBaseCssClass = { ...props, baseCssClass };
  const embedComponent = useRef(null);
  let provider;
  useEffect(() => {
    if (embedComponent.current) {
      const providerAttribute = (embedComponent.current as HTMLDivElement)
        .dataset?.provider;
      if (providerAttribute) {
        executeProcessorScript(providerAttribute);
      }
    }
  }, []);

  if (props.result?.processor === 'oembed' && props.result?.options?.provider) {
    provider = props.result?.options?.provider;
  }

  if (props.result?.processor === 'pinterest') {
    provider = 'Pinterest';
  }

  return isEmpty(props) ? (
    props.isInEditor && !props.hidePlaceHolder ? (
      <EditorPlaceHolder componentTitle="Embed" />
    ) : null
  ) : (
    <div
      className={classNames(props.baseCssClass ?? 'cmp-embed', {
        'cq-dd-embed': props.isInEditor ?? false,
      })}
      id={props.id}
      ref={embedComponent}
      {...(provider ? { 'data-provider': provider } : {})}
    >
      <EmbedContent {...propsWithBaseCssClass} />
    </div>
  );
};

export default CoreEmbed;
