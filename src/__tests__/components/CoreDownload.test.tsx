import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { ComponentMapping } from '@adobe/aem-react-editable-components';
import CoreDownload from '@/components/CoreDownload';
import CoreButton from '@/components/CoreButton';

describe('CoreDownload ->', () => {
  let ComponentMappingSpy: jest.SpyInstance;

  beforeEach(() => {
    ComponentMappingSpy = jest.spyOn(ComponentMapping, 'get');
    ComponentMappingSpy.mockReturnValue(CoreButton);
  });

  afterEach(() => {
    ComponentMappingSpy.mockRestore();
  });

  it('Renders without crashing', () => {
    const { container } = render(
      <CoreDownload
        displayFilename={true}
        displayFormat={true}
        displaySize={true}
        isInEditor={false}
        title="test"
        titleType="h2"
      />,
    );

    expect(container.querySelector('.cmp-download')).toBeNull();
  });

  it('Renders out properly', async () => {
    const user = userEvent.setup();
    let captured = false;

    const props = {
      actionText: 'Download now!!!',
      componentMapping: ComponentMapping,
      cqType: 'chumley/components/download',
      description:
        '<p>Asset uploaded directly from a local file system</p>\\r\\n',
      displayFilename: true,
      displayFormat: true,
      displaySize: true,
      extension: 'jpg',
      filename: 'lava-into-ocean.jpg',
      format: 'image/jpeg',
      handleOnClick: () => {
        captured = true;
      },
      hidePlaceHolder: false,
      isInEditor: false,
      size: '81 KB',
      title: 'Uploaded Asset',
      titleType: 'h2',
      url: '/content/core-components-examples/library/page-authoring/download/jcr:content/root/responsivegrid/demo_68071479/component/download/file.coredownload.jpeg/lava-into-ocean.jpg',
    };

    const { container } = render(
      <MemoryRouter>
        <CoreDownload {...props} />
      </MemoryRouter>,
    );

    expect(container.querySelector('.cmp-download')).not.toBeNull();

    const properties = container.querySelectorAll('.cmp-download__property');

    expect(properties).toHaveLength(3);

    const anchor = container.querySelector('.cmp-download__action');
    expect(anchor).not.toBeNull();

    await user.click(anchor!);

    expect(captured).toEqual(true);
  });
});
