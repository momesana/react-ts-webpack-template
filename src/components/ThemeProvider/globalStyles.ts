import { createGlobalStyle } from "styled-components";
// import "./reset.css";

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 14px;
    font-family:"Roboto", sans-serif;

    --color-primary: ${props => props.theme.colorPrimary};
    --color-link: ${props => props.theme.colorLink};
    --color-bg-container:  ${props => props.theme.colorBgContainer};
    --color-bg-elevated: ${props => props.theme.colorBgElevated};
    --color-text: ${props => props.theme.colorText};
    --color-text-secondary: ${props => props.theme.colorTextSecondary};
    --color-white: ${props => props.theme.colorWhite};
  }

  body {
    margin: 0;
    padding: 1rem;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyles;
