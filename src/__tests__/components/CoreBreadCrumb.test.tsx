import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CoreBreadCrumb, { BreadCrumbItem } from '@/components/CoreBreadCrumb';

describe('CoreBreadCrumb ->', () => {
  it('Renders without crashing', () => {
    const { container } = render(
      <CoreBreadCrumb
        ariaLabel="Label"
        cqPath=""
        isInEditor={false}
        items={[]}
      />,
    );
    expect(container.querySelector('.cmp-breadCrumb')).toBeNull();
  });

  it('Renders breadcrumb items if provided', () => {
    const items: BreadCrumbItem[] = [
      {
        active: false,
        link: { url: '/content/some/url.html' },
        routed: false,
        title: 'Item1',
      },
      {
        active: false,
        link: { url: '/content/some/url.html' },
        routed: false,
        title: 'Item2',
      },
      {
        active: true,
        link: { url: '/content/some/url.html' },
        routed: false,
        title: 'Item3',
      },
    ];

    const { container } = render(
      <CoreBreadCrumb
        ariaLabel="Label"
        cqPath=""
        isInEditor={false}
        items={items}
      />,
    );
    expect(container.querySelector('.cmp-breadcrumb')).not.toBeNull();

    expect(container.querySelectorAll('li')).toHaveLength(3);

    expect(
      container.querySelector('.cmp-breadcrumb__item--active')!.textContent,
    ).toEqual('Item3');
  });

  it('Renders routed breadcrumb items if provided', () => {
    const items: BreadCrumbItem[] = [
      {
        active: false,
        link: { url: '/content/some/url.html' },
        routed: true,
        title: 'Item1',
      },
      {
        active: false,
        link: { url: '/content/some/url.html' },
        routed: true,
        title: 'Item2',
      },
      {
        active: true,
        link: { url: '/content/some/url.html' },
        routed: true,
        title: 'Item3',
      },
    ];

    const { container } = render(
      <MemoryRouter>
        <CoreBreadCrumb
          ariaLabel="Label"
          cqPath=""
          isInEditor={false}
          items={items}
        />
      </MemoryRouter>,
    );
    expect(container.querySelector('.cmp-breadcrumb')).not.toBeNull();

    expect(container.querySelectorAll('li')).toHaveLength(3);

    expect(
      container.querySelector('.cmp-breadcrumb__item--active')!.textContent,
    ).toEqual('Item3');
  });
});
