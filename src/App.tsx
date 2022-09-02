import { Header } from './components';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;
