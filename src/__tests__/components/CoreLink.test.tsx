import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { RoutedModel } from '@/components/ComponentProperties';
import CoreLink from '@/components/CoreLink';

interface DummyModel extends RoutedModel {
  url?: string;
  text?: string;
}

const NotFound = () => {
  return <div>Not Found</div>;
};

const DummyComponent = (props: DummyModel) => {
  const routedAttribute: { isRouted?: boolean } = {};
  if (typeof props.routed !== 'undefined') {
    routedAttribute.isRouted = props.routed;
  }
  return (
    <div className={'dummy-component'}>
      <CoreLink className={'dummy-link'} href={props.url} {...routedAttribute}>
        {props.text}
      </CoreLink>
    </div>
  );
};

const createRouterConfig = (url: string, text: string, routed?: boolean) => {
  return [
    {
      element: <NotFound />,
      path: '*',
    },
    {
      element: <DummyComponent routed={routed} text={text} url={url} />,
      path: '/page1',
    },
    {
      element: (
        <div>
          <h1 className={'dummy'}>Hello, World</h1>
        </div>
      ),
      path: '/page2',
    },
  ];
};

const createDummyComponent = (url: string, text: string, routed?: boolean) => {
  return {
    user: userEvent.setup(),
    ...render(
      <RouterProvider
        router={createMemoryRouter(createRouterConfig(url, text, routed), {
          initialEntries: ['/page1'],
        })}
      />,
    ),
  };
};

describe('CoreLink ->', () => {
  let oldConsoleError: () => void;

  beforeAll(() => {
    oldConsoleError = console.error;
    console.error = jest.fn();
  });

  afterAll(() => {
    console.error = oldConsoleError;
  });

  it('Renders and routes properly', async () => {
    const { container, user } = createDummyComponent(
      '/page2',
      'Go to page 2',
      true,
    );
    const dummyComponent: HTMLElement | null =
      container.querySelector('.dummy-component');
    expect(dummyComponent).not.toBeNull();
    const anchor = container.querySelector('a.dummy-link');
    expect(anchor).not.toBeNull();
    await user.click(anchor!);
    const heading = container.querySelector('h1.dummy');
    expect(heading).not.toBeNull();
  });

  it('Does route if the link is relative and isRouted is not specified', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { container, user } = createDummyComponent('/page3', 'Go to page 3');

    const dummyComponent: HTMLElement | null =
      container.querySelector('.dummy-component');
    expect(dummyComponent).not.toBeNull();

    const anchor = container.querySelector('a.dummy-link');
    expect(anchor).not.toBeNull();
    await user.click(anchor!);
    expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
  });

  it('Does NOT route if the link is empty', async () => {
    const { container, user } = createDummyComponent('', 'Empty Link', false);

    const dummyComponent: HTMLElement | null =
      container.querySelector('.dummy-component');
    expect(dummyComponent).not.toBeNull();

    const anchor = container.querySelector('a.dummy-link');
    expect(anchor).not.toBeNull();

    if (anchor) {
      const href = anchor.getAttribute('href');

      if (href) {
        expect(href).toEqual('#');
      }

      await user.click(anchor);
      const heading = container.querySelector('h1.dummy');
      expect(heading).toBeNull();
    }
  });

  it('Does NOT route if we tell it to', async () => {
    const { container, user } = createDummyComponent(
      '/page2',
      'Go to page 2',
      false,
    );
    const dummyComponent: HTMLElement | null =
      container.querySelector('.dummy-component');
    expect(dummyComponent).not.toBeNull();
    const anchor = container.querySelector('a.dummy-link');
    expect(anchor).not.toBeNull();
    await user.click(anchor!);
    const heading = container.querySelector('h1.dummy');
    expect(heading).toBeNull();
  });

  it('Will never route external URLs', async () => {
    const { container, user } = createDummyComponent(
      'https://adobe.com',
      'Adobe',
      true,
    );
    const dummyComponent: HTMLElement | null =
      container.querySelector('.dummy-component');
    expect(dummyComponent).not.toBeNull();
    const anchor = container.querySelector('a.dummy-link');
    expect(anchor).not.toBeNull();
    await user.click(anchor!);
    const heading = container.querySelector('h1.dummy');
    expect(heading).toBeNull();
  });
});
