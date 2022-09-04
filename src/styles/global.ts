import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    width: 100%;
    height: 100%;

    background: ${({ theme }) => theme.colors.primary.background};
  }

  button {
    cursor: pointer;
  }

  button, input {
    &:focus {
      outline-color: ${({ theme }) => theme.colors.secondary.light_blue};
    }
  }

  ul {
    list-style: none;
  }

  ::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.colors.primary.background};
    width: .8rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.secondary.light_blue};
    border-radius: 2rem;
  }
`;
