import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CoreText, { isEmpty, TextProps } from '@/components/CoreText';

describe('CoreText ->', () => {
  it('Has a proper isEmpty function', () => {
    const props: TextProps = {
      isInEditor: false,
      richText: true,
      text: 'test',
    };

    expect(isEmpty(props.text)).toBe(false);

    const propsEmpty: TextProps = {
      isInEditor: false,
      richText: true,
      text: '',
    };

    expect(isEmpty(propsEmpty.text)).toBe(true);
  });

  it('Renders without crashing', () => {
    const { container } = render(
      <CoreText isInEditor={false} text={'Some Text'} />,
    );
    expect(container.querySelector('.cmp-text')).not.toBeNull();
  });

  it('Renders plain text', () => {
    const { container } = render(
      <CoreText isInEditor={false} text={'Plain Text'} />,
    );

    const p = container.querySelector('.cmp-text__paragraph');
    expect(p!.textContent).toEqual('Plain Text');
  });

  it('Renders rich text', () => {
    const richText = '<div class="myclass">richtext</div>';
    const expectedHtml =
      '<div class="cmp-text" data-rte-editelement="true" id="testId"><div class="myclass">richtext</div></div>';
    const { container } = render(
      <CoreText
        id="testId"
        isInEditor={false}
        richText={true}
        text={richText}
      />,
    );

    expect(container.querySelector('.cmp-text')!.outerHTML).toEqual(
      expectedHtml,
    );
  });

  it('Renders rich text with anchor tags replaced with the CoreLink component', () => {
    const richText =
      '<div class="dummy-component"><a class="dummy-link" href="/page3">Go to page 3</a></div>';
    const expectedHtml =
      '<div class="cmp-text" data-rte-editelement="true" id="testId"><div class="dummy-component"><a class="cmp-link dummy-link" href="/page3" data-discover="true">Go to page 3</a></div></div>';
    const { container } = render(
      <MemoryRouter>
        <CoreText
          id="testId"
          isInEditor={false}
          richText={true}
          text={richText}
        />
      </MemoryRouter>,
    );

    expect(container.querySelector('.cmp-text')!.outerHTML).toEqual(
      expectedHtml,
    );
  });
});
