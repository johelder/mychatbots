import { renderWithWrapper } from '../../tests/__mocks__';
import { Button } from '.';

describe('Button Component', () => {
  it('should render a correctly button title', () => {
    const { getByText } = renderWithWrapper(<Button title="fake-title" />);
    const buttonTitle = getByText('fake-title');

    expect(buttonTitle).toBeInTheDocument();
  });
});
