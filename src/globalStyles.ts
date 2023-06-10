import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  }
  
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 1rem;
    background: palegoldenrod;
    min-height: 100vh;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
