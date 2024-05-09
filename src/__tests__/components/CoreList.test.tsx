import { render } from '@testing-library/react';
import { HTMLToJSON } from 'html-to-json-parser';
import CoreList from '@/components/CoreList';
import listAsJson from './CoreList.json';

describe('CoreList ->', () => {
  const mockItems = [
    {
      description: 'Display a page heading',
      lastModified: 1547642198741,
      link: {
        url: '/content/core-components-examples/library/page-authoring/title.html',
      },
      path: '/content/core-components-examples/library/page-authoring/title',
      title: 'Title',
    },
    {
      description: 'Display a rich text paragraph',
      lastModified: 1548159422163,
      link: {
        url: '/content/core-components-examples/library/page-authoring/text.html',
      },
      path: '/content/core-components-examples/library/page-authoring/text',
      title: 'Text',
    },
    {
      description: 'Display an image asset',
      lastModified: 1550255022224,
      link: {
        url: '/content/core-components-examples/library/page-authoring/image.html',
      },
      path: '/content/core-components-examples/library/page-authoring/image',
      title: 'Image',
    },
    {
      description: 'Display a button or anchor button',
      lastModified: 1547062227177,
      link: {
        url: '/content/core-components-examples/library/page-authoring/button.html',
      },
      path: '/content/core-components-examples/library/page-authoring/button',
      title: 'Button',
    },
    {
      description: 'Link an image and text',
      lastModified: 1575799718587,
      link: {
        url: '/content/core-components-examples/library/page-authoring/teaser.html',
      },
      path: '/content/core-components-examples/library/page-authoring/teaser',
      title: 'Teaser',
    },
    {
      description: 'Display an asset for download',
      lastModified: 1558992253683,
      link: {
        url: '/content/core-components-examples/library/page-authoring/download.html',
      },
      path: '/content/core-components-examples/library/page-authoring/download',
      title: 'Download',
    },
    {
      description: 'Display a list of pages',
      lastModified: 1547642282466,
      link: {
        url: '/content/core-components-examples/library/page-authoring/list.html',
      },
      path: '/content/core-components-examples/library/page-authoring/list',
      title: 'List',
    },
    {
      description: 'Display an experience fragment',
      lastModified: 1566294323252,
      link: {
        url: '/content/core-components-examples/library/page-authoring/experience-fragment.html',
      },
      path: '/content/core-components-examples/library/page-authoring/experience-fragment',
      title: 'Experience Fragment',
    },
    {
      description: 'Display a content fragment asset',
      lastModified: 1547644839952,
      link: {
        url: '/content/core-components-examples/library/page-authoring/content-fragment.html',
      },
      path: '/content/core-components-examples/library/page-authoring/content-fragment',
      title: 'Content Fragment',
    },
    {
      description: 'Display a list of content fragments',
      lastModified: 1554130037469,
      link: {
        url: '/content/core-components-examples/library/page-authoring/content-fragment-list.html',
      },
      path: '/content/core-components-examples/library/page-authoring/content-fragment-list',
      title: 'Content Fragment List',
    },
    {
      description: 'Embed a third-party widget',
      lastModified: 1567092519658,
      link: {
        url: '/content/core-components-examples/library/page-authoring/embed.html',
      },
      path: '/content/core-components-examples/library/page-authoring/embed',
      title: 'Embed',
    },
    {
      description: 'Add social sharing links',
      lastModified: 1547062206375,
      link: {
        url: '/content/core-components-examples/library/page-authoring/social-sharing.html',
      },
      path: '/content/core-components-examples/library/page-authoring/social-sharing',
      title: 'Social Sharing',
    },
    {
      description: 'Display a section divider',
      lastModified: 1547062195738,
      link: {
        url: '/content/core-components-examples/library/page-authoring/separator.html',
      },
      path: '/content/core-components-examples/library/page-authoring/separator',
      title: 'Separator',
    },
  ];

  const props = {
    dateFormatString: 'YYYY-MM-DD',
    hidePlaceHolder: false,
    isInEditor: false,
    items: mockItems,
    linkItems: true,
    routed: false,
    showDescription: true,
    showModificationDate: true,
  };

  it('Renders without crashing', () => {
    const { container } = render(<CoreList {...props} />);
    expect(container.querySelector('.cmp-list')).not.toBeNull();
  });

  it('Renders a basic list properly', async () => {
    const { container } = render(<CoreList {...props} />);
    const results = container
      .querySelector('.cmp-list')!
      .outerHTML.replace(/\s+/g, ' ')
      .replace(/>\s+</g, '><')
      .trim();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const resultsAsObject = (await HTMLToJSON(results, false)) as string;
    expect(JSON.stringify(resultsAsObject)).toEqual(JSON.stringify(listAsJson));
  });
});
