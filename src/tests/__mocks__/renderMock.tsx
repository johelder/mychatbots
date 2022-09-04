import { ReactElement, ReactNode } from 'react';

import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { MemoryRouter } from 'react-router-dom';

interface IWrapper {
  children: ReactNode;
}

export function renderWithWrapper(component: ReactElement, options = {}) {
  const Wrapper = ({ children }: IWrapper) => (
    <ThemeProvider theme={theme}>
      <MemoryRouter>{children}</MemoryRouter>
    </ThemeProvider>
  );

  return render(component, { wrapper: Wrapper, ...options });
}
