import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
      text-decoration: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        font-family: 'Inter', sans-serif;
        letter-spacing: .6px;
    }
    ul, li {
         list-style: none;
    }
`;
