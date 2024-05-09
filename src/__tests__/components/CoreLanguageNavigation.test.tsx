import { render } from '@testing-library/react';
import CoreLanguageNavigation from '@/components/CoreLanguageNavigation';
import items from './CoreLanguageNavigation.json';

describe('CoreLanguageNavigation ->', () => {
  it('Renders without crashing', () => {
    const { container } = render(
      <CoreLanguageNavigation
        isInEditor={false}
        items={items}
        routed={false}
      />,
    );

    expect(container.querySelector('.cmp-languagenavigation')).not.toBeNull();
  });

  it('Renders a basic navigation properly', () => {
    const { container } = render(
      <CoreLanguageNavigation
        {...{
          hidePlaceHolder: false,
          isInEditor: false,
          items: items,
          routed: false,
        }}
      />,
    );

    const nav = container.querySelector('nav');

    expect(nav).not.toBeNull();
  });
});
