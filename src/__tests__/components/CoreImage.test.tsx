import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CoreImage, { ImageProps, isEmpty } from '@/components/CoreImage';

describe('CoreImage ->', () => {
  it('Has a proper isEmpty function', () => {
    const propsOne: ImageProps = {
      alt: 'Some Image',
      isInEditor: false,
      src: '/content/dam/image.jpg',
    };

    expect(isEmpty(propsOne.src)).toEqual(false);

    const propsTwo: ImageProps = {
      alt: 'Some Image',
      isInEditor: false,
      src: ' ',
    };

    expect(isEmpty(propsTwo.src)).toEqual(true);
  });

  it('Renders without crashing', () => {
    const { container } = render(
      <CoreImage
        alt={'Some Image'}
        isInEditor={false}
        src={'/content/dam/image.jpg'}
      />,
    );
    expect(container.querySelector('.cmp-image')).not.toBeNull();
  });

  it('Renders with a cq-dd-image in edit mode', () => {
    //let captured = false;
    const props: ImageProps = {
      alt: 'Some Image',
      isInEditor: true,
      src: '/content/dam/image.jpg',
    };

    const { container } = render(<CoreImage {...props} />);

    expect(container.querySelector('.cq-dd-image')).not.toBeNull();
    expect(container.querySelector('.cmp-image')).not.toBeNull();
  });

  it('Renders with a link', () => {
    const props: ImageProps = {
      alt: 'Some Image',
      imageLink: { url: '/content/some/link.html' },
      isInEditor: false,
      routed: true,
      src: '/content/dam/image.jpg',
    };

    const { container } = render(
      <MemoryRouter>
        <CoreImage {...props} />
      </MemoryRouter>,
    );

    expect(container.querySelector('.cmp-image')).not.toBeNull();

    const anchor = container.querySelector('a');
    expect(anchor).not.toBeNull();

    const image = container.querySelector('.cmp-image__image');
    expect(image).not.toBeNull();

    expect(image!.getAttribute('alt')).toEqual(props.alt);
    expect(image!.getAttribute('src')).toEqual(props.src);
  });

  it('Renders with title', () => {
    //let captured = false;
    const props: ImageProps = {
      alt: 'Some Image',
      isInEditor: false,
      src: '/content/dam/image.jpg',
      title: 'Awesome Title!',
    };

    const { container } = render(<CoreImage {...props} />);

    const title = container.querySelector('.cmp-image__title');

    expect(title).not.toBeNull();
    expect(title!.textContent).toEqual(props.title);
  });
});
