import { createGlobalStyle } from "styled-components";
import "./reset.css";

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

    --font-size-x-large: ${props => props.theme.fontSizeXlarge};
    --font-size-large: ${props => props.theme.fontSizeLarge};
    --font-size-medium: ${props => props.theme.fontSizeMedium};
    --font-size-normal: ${props => props.theme.fontSizeNormal};
    --font-size-default: ${props => props.theme.fontSizeDefault};
    --font-size-small: ${props => props.theme.fontSizeSmall};
    --font-size-x-small:${props => props.theme.fontSizeXsmall};
    --font-weight-regular:${props => props.theme.fontWeightRegular};
    --font-weight-medium:${props => props.theme.fontWeightMedium};
    --font-weight-bold:${props => props.theme.fontWeightBold};

    --gap-x-small: ${props => props.theme.gapXsmall} ;
    --gap-small: ${props => props.theme.gapSmall} ;
    --gap-medium: ${props => props.theme.gapMedium} ;
    --gap-large: ${props => props.theme.gapLarge} ;
    --gap-x-large: ${props => props.theme.gapXlarge} ;
  }

  body {
    margin: 0;
    padding: 1rem;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyles;
