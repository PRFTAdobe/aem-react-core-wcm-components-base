import { ComponentMapping } from '@adobe/aem-react-editable-components';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CoreButton from '@/components/CoreButton';
import CoreTeaser from '@/components/CoreTeaser';

describe('CoreTeaser ->', () => {
  let ComponentMappingSpy: jest.SpyInstance;

  beforeEach(() => {
    ComponentMappingSpy = jest.spyOn(ComponentMapping, 'get');
    ComponentMappingSpy.mockReturnValue(CoreButton);
  });

  afterEach(() => {
    ComponentMappingSpy.mockRestore();
  });

  const defaultProps = {
    actions: [
      {
        link: {
          attributes: {
            target: '_blank',
          },
          url: '/content/link1',
          valid: true,
        },
        title: 'Link1',
      },
      {
        link: {
          attributes: {
            target: '_self',
          },
          url: '/content/link2',
          valid: true,
        },
        title: 'Link2',
      },
    ],
    actionsEnabled: true,
    componentMapping: ComponentMapping,
    cqType: 'chumley/components/teaser',
    description: '<p>Paragraph</p>',
    imageAlt: 'snowy mountains',
    imageLinkHidden: false,
    imagePath: '/some/image.png',
    link: {
      attributes: {
        target: '_blank',
      },
      url: '/some/url.html',
      valid: true,
    },
    pretitle: 'Custom pretitle',
    title: 'Some title',
    titleLinkHidden: false,
    titleType: 'h2',
  };
  it('Renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <CoreTeaser isInEditor={false} {...defaultProps} />
      </MemoryRouter>,
    );
    expect(container.querySelector('.cmp-teaser')).not.toBeNull();
  });

  it('Renders as expected', () => {
    const { container } = render(
      <MemoryRouter>
        <CoreTeaser isInEditor={false} {...defaultProps} />
      </MemoryRouter>,
    );

    const content = container.querySelector('.cmp-teaser__content');
    expect(content).not.toBeNull();

    //description
    const description = content!.querySelector('.cmp-teaser__description');
    expect(description).not.toBeNull();
    expect(description!.outerHTML).toEqual(
      `<div class="cmp-teaser__description">${defaultProps.description}</div>`,
    );

    //pretitle
    const pretitle = content!.querySelector('.cmp-teaser__pretitle');
    expect(pretitle).not.toBeNull();
    expect(pretitle!.outerHTML).toEqual(
      `<div class="cmp-teaser__pretitle">${defaultProps.pretitle}</div>`,
    );

    //title
    const title = content!.querySelector('.cmp-teaser__title');
    expect(title).not.toBeNull();
    const expectedHtml = `<div class="cmp-teaser__title"><${defaultProps.titleType} class="cmp-teaser__title-text"><a class="cmp-link cmp-teaser__title-link" href="${defaultProps.link.url}" data-discover="true">${defaultProps.title}</a></${defaultProps.titleType}></div>`;
    expect(title!.outerHTML).toEqual(expectedHtml);

    //image
    const image = container.querySelector('.cmp-teaser__image');
    expect(image).not.toBeNull();

    const img = image!.querySelector('img');
    expect(img!.getAttribute('src')).toEqual(defaultProps.imagePath);
    expect(img!.getAttribute('alt')).toEqual(defaultProps.imageAlt);

    //actions
    const actionContainer = container.querySelector(
      '.cmp-teaser__action-container',
    );
    expect(actionContainer).not.toBeNull();

    const actions = actionContainer!.querySelectorAll(
      'a.cmp-teaser__action-link',
    );
    expect(actions).toHaveLength(2);
  });
});
