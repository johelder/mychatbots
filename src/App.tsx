import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Hello World</h1>
    </ThemeProvider>
  );
}

export default App;
