import { render } from '@testing-library/react';
import CoreEmbed, { EmbedProps, isEmpty } from '@/components/CoreEmbed';

describe('CoreEmbed ->', () => {
  it('Has a proper isEmpty function', () => {
    const propsOne: EmbedProps = {
      isInEditor: false,
      type: 'URL',
    };
    expect(isEmpty(propsOne)).toEqual(true);

    const propsTwo: EmbedProps = {
      isInEditor: false,
      type: 'HTML',
    };
    expect(isEmpty(propsTwo)).toEqual(true);

    const propsThree: EmbedProps = {
      isInEditor: false,
      type: 'EMBEDDABLE',
    };

    expect(isEmpty(propsThree)).toEqual(true);

    const propsFour: EmbedProps = {
      isInEditor: false,
      result: {
        processor: 'oembed',
      },
      type: 'URL',
      url: 'https://youtu.be/f7hbWvHKns0',
    };

    expect(isEmpty(propsFour)).toEqual(false);

    const propsFive: EmbedProps = {
      html: '<p>Sample HTML</p>',
      isInEditor: false,
      type: 'HTML',
    };

    expect(isEmpty(propsFive)).toEqual(false);

    const propsSix: EmbedProps = {
      isInEditor: false,
      type: 'EMBEDDABLE',
      youTubeProps: {
        layout: 'fixed',
        youtubeAspectRatio: '56',
        youtubeAutoPlay: true,
        youtubeHeight: '500',
        youtubeLoop: true,
        youtubeMute: true,
        youtubePlaysInline: false,
        youtubeRel: false,
        youtubeVideoId: 'f7hbWvHKns0',
        youtubeWidth: '500',
      },
    };

    expect(isEmpty(propsSix)).toEqual(false);
  });

  it('Renders HTML Embed without crashing', () => {
    const { container } = render(
      <CoreEmbed
        {...{
          html: '<p class="cmp-embed__testing-html">Sample HTML</p>',
          isInEditor: false,
          type: 'HTML',
        }}
      />,
    );
    expect(container.querySelector('.cmp-embed__testing-html')).not.toBeNull();
  });

  it('Renders Fixed Embeddable Embed without crashing', () => {
    const { container } = render(
      <CoreEmbed
        {...{
          isInEditor: false,
          type: 'EMBEDDABLE',
          youTubeProps: {
            layout: 'fixed',
            youtubeAspectRatio: '56',
            youtubeAutoPlay: true,
            youtubeHeight: '500',
            youtubeLoop: true,
            youtubeMute: false,
            youtubePlaysInline: false,
            youtubeRel: false,
            youtubeVideoId: 'f7hbWvHKns0',
            youtubeWidth: '500',
          },
        }}
      />,
    );
    expect(
      container.querySelector('.cmp-embed__embeddable-wrapper'),
    ).toBeNull();

    const iFrameElement = container.querySelector('iframe');
    expect(iFrameElement!.getAttribute('src')).toEqual(
      'https://www.youtube.com/embed/f7hbWvHKns0?autoplay=1&loop=1&mute=0&playlist=f7hbWvHKns0&playsinline=0&rel=0',
    );
    expect(iFrameElement!.getAttribute('width')).toEqual('500');
  });

  it('Renders Responsive Embeddable Embed without crashing', () => {
    const { container } = render(
      <CoreEmbed
        {...{
          isInEditor: false,
          type: 'EMBEDDABLE',
          youTubeProps: {
            layout: 'responsive',
            youtubeAspectRatio: '56',
            youtubeAutoPlay: true,
            youtubeLoop: true,
            youtubeMute: true,
            youtubePlaysInline: false,
            youtubeRel: false,
            youtubeVideoId: 'f7hbWvHKns0',
          },
        }}
      />,
    );
    expect(
      container.querySelector('.cmp-embed__embeddable-wrapper'),
    ).not.toBeNull();

    const iFrameElement = container.querySelector('iframe');
    expect(iFrameElement!.getAttribute('src')).toEqual(
      'https://www.youtube.com/embed/f7hbWvHKns0?autoplay=1&loop=1&mute=1&playlist=f7hbWvHKns0&playsinline=0&rel=0',
    );
    expect(iFrameElement!.getAttribute('width')).toEqual('100%');
  });

  it('Renders oEmbed Youtube URL Embed without crashing', () => {
    const { container } = render(
      <CoreEmbed
        {...{
          isInEditor: false,
          result: {
            options: {
              provider: 'YouTube',
              response: {
                height: '113',
                html: '<iframe width="200" height="113" src="https://www.youtube.com/embed/f7hbWvHKns0?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen title="GREENLAND - LAND OF ICE 4K"></iframe>',
                providerName: 'YouTube',
                providerUrl: 'https://www.youtube.com/',
                title: 'GREENLAND - LAND OF ICE 4K',
                type: 'video',
                width: '200',
              },
            },
            processor: 'oembed',
          },
          type: 'URL',
          url: 'https://youtu.be/f7hbWvHKns0',
        }}
      />,
    );

    const iFrameElement = container.querySelector('iframe');
    expect(iFrameElement).not.toBeNull();
  });

  it('Renders Pinterest URL Embed without crashing', () => {
    const { container } = render(
      <CoreEmbed
        {...{
          isInEditor: false,
          result: {
            options: { pinId: '146859637829777606' },
            processor: 'pinterest',
          },
          type: 'URL',
          url: 'https://www.pinterest.com/pin/146859637829777606/',
        }}
      />,
    );

    const anchorTag = container.querySelector('a');
    expect(anchorTag).not.toBeNull();
  });
});
