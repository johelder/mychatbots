import { renderWithWrapper } from '../../tests/__mocks__';
import { Loading } from '.';

describe('Loading Component', () => {
  it('should have animation style', () => {
    const { getByTestId } = renderWithWrapper(<Loading />);

    const loadingIcon = getByTestId('loading-icon');

    console.log(loadingIcon);

    expect(loadingIcon).toHaveStyle({
      animation: 'bqZzKE 600ms infinite linear',
    });
  });
});
