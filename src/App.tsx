import { AppRoutes } from './routes/app.routes';

import { Header } from './components';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles';
import { AppProvider } from './hooks';

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <AppRoutes />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
