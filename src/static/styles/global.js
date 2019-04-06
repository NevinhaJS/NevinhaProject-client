import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  body {
      margin: 0;
      padding: 0;
  }

  body, a, p, label, figcaption {
    font-family: "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: ${theme.colors.primary};
  }

  h1, h2, h3, h4 {
    font-weight: 500
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  ul, li {
    list-style: none;
  }
`;
  