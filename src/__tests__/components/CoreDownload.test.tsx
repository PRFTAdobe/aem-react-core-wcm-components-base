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
      componentMapping: ComponentMapping,
      cqType: 'chumley/components/download',
      description: '<p>Lava flowing into the ocean</p>',
      displayFilename: true,
      displayFormat: true,
      displaySize: true,
      extension: 'jpeg',
      filename: 'lava-into-ocean.jpg',
      format: 'image/jpeg',
      handleOnClick: () => {
        captured = true;
      },
      id: 'download-35b1ba8235',
      isInEditor: false,
      size: '81 KB',
      title: 'Lava flowing into the ocean',
      titleType: 'h3',
      url: '/content/dam/chumley/lava-into-ocean.jpg.coredownload.jpeg',
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
