import { Error } from '.';
import { renderWithWrapper } from '../../tests/__mocks__';

describe('Error Component', () => {
  it('should return a error message', () => {
    const { getByText } = renderWithWrapper(
      <Error message="fake-error-message" />,
    );
    const errorMessage = getByText('fake-error-message');

    expect(errorMessage).toBeInTheDocument();
  });
});
