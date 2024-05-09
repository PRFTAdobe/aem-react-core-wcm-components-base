import items from './CoreNavigation.json';
import { render } from '@testing-library/react';
import CoreNavigation from '@/components/CoreNavigation';

describe('CoreNavigation ->', () => {
  it('Renders without crashing', () => {
    const { container } = render(
      <CoreNavigation isInEditor={false} items={items} routed={false} />,
    );

    expect(
      container.querySelectorAll('.cmp-navigation__item--level-0').length,
    ).toEqual(1);
  });

  it('Renders a basic navigation properly', () => {
    const { container } = render(
      <CoreNavigation isInEditor={false} items={items} routed={false} />,
    );
    expect(container.querySelector('nav')).not.toBeNull();
  });

  it('Renders all grandchildren', () => {
    const { container } = render(
      <CoreNavigation isInEditor={false} items={items} routed={false} />,
    );
    expect(
      container.querySelectorAll('.cmp-navigation__item--level-2').length,
    ).toEqual(25);
  });
});
