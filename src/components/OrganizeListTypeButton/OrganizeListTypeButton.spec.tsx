import { OrganizeListTypeButton } from '.';
import { theme } from '../../styles';
import { renderWithWrapper } from '../../tests/__mocks__';

describe('OrganizeListTypeButton', () => {
  it('should render a correct icon when active list type is blocks', () => {
    const { getByTestId } = renderWithWrapper(
      <OrganizeListTypeButton activeType="blocks" isActive={true} />,
    );
    const blocksIcon = getByTestId('blocks-icon');

    expect(blocksIcon).toBeInTheDocument();
  });

  it('should render a correct icon when active list type is list', () => {
    const { getByTestId } = renderWithWrapper(
      <OrganizeListTypeButton activeType="list" isActive={true} />,
    );
    const listIcon = getByTestId('list-icon');

    expect(listIcon).toBeInTheDocument();
  });

  it('should not have a opacity color when is active', () => {
    const { getByTestId } = renderWithWrapper(
      <OrganizeListTypeButton activeType="list" isActive={true} />,
    );

    const listIcon = getByTestId('list-icon');

    expect(listIcon).toHaveStyle({
      color: theme.colors.texts.gray_800,
    });
  });

  it('should have a opacity color when is not active', () => {
    const { getByTestId } = renderWithWrapper(
      <OrganizeListTypeButton activeType="list" isActive={false} />,
    );

    const listIcon = getByTestId('list-icon');

    expect(listIcon).toHaveStyle({
      color: theme.colors.borders.gray_200,
    });
  });
});
