import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import CoreButton from '@/components/CoreButton';

describe('CoreButton ->', () => {
  it('Renders without crashing', () => {
    const { container } = render(<CoreButton isInEditor={false} />);
    expect(container.querySelector('.cmp-button')).toBeNull();
  });

  it('Renders a proper button with link', async () => {
    let captured = false;
    const user = userEvent.setup();

    const properties = {
      ariaLabel: 'This is a Button',
      buttonLink: {
        url: '/content/some/link.html',
      },
      handleOnClick(): void {
        captured = true;
      },
      icon: 'iconCSSCls',
      routed: true,
      text: 'Some Text',
    };

    const { container } = render(
      <MemoryRouter>
        <CoreButton {...properties} isInEditor={false} />
      </MemoryRouter>,
    );

    expect(container.querySelector('.cmp-button')).not.toBeNull();

    const button = container.querySelectorAll('a.cmp-button');
    expect(button).toHaveLength(1);

    await user.click(button[0]);
    expect(captured).toEqual(true);

    expect(button[0].getAttribute('aria-label')).toEqual('This is a Button');
    expect(button[0].getAttribute('href')).toEqual('/content/some/link.html');

    const iconSpan = button[0].querySelector(
      'span.cmp-button__icon.cmp-button__icon--iconCSSCls',
    );
    expect(iconSpan).not.toBeNull();

    const textSpan = button[0].querySelector('span.cmp-button__text');
    expect(textSpan!.textContent).toEqual('Some Text');
  });

  it('Renders a proper button without a link', async () => {
    let captured = false;
    const user = userEvent.setup();

    const properties = {
      ariaLabel: 'This is a Button',
      handleOnClick(): void {
        captured = true;
      },
      icon: 'iconCSSCls',
      text: 'Some Text',
    };

    const { container } = render(
      <CoreButton {...properties} isInEditor={false} />,
    );

    expect(container.querySelector('.cmp-button')).not.toBeNull();
    const button = container.querySelectorAll('button.cmp-button');
    const anchor = container.querySelectorAll('a.cmp-button');

    expect(button).toHaveLength(1);
    expect(anchor).toHaveLength(0);

    await user.click(button[0]);
    expect(captured).toEqual(true);

    const iconSpan = button[0].querySelector(
      'span.cmp-button__icon.cmp-button__icon--iconCSSCls',
    );
    expect(iconSpan).not.toBeNull();

    const textSpan = button[0].querySelector('span.cmp-button__text');
    expect(textSpan!.textContent).toEqual('Some Text');
  });
});
