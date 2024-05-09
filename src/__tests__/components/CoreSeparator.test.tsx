import { render } from '@testing-library/react';
import CoreSeparator from '@/components/CoreSeparator';

describe('CoreSeparator ->', () => {
  it('Renders without crashing', () => {
    const { container } = render(<CoreSeparator isInEditor={false} />);
    expect(container.querySelector('.cmp-separator')).not.toBeNull();
  });

  it('Renders as expected', () => {
    const { container } = render(<CoreSeparator isInEditor={false} />);
    const html =
      '<div class="cmp-separator"><hr class="cmp-separator__horizontal-rule"></div>';
    expect(container.querySelector('.cmp-separator')!.outerHTML).toEqual(html);
  });
});
