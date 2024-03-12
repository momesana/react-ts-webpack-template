import "styled-components";

// see https://styled-components.com/docs/api#usage-with-typescript
import { CSSProp } from "styled-components/cssprop";

declare module "react" {
  interface Attributes {
    css?: CSSProp;
  }
}

// see https://styled-components.com/docs/api#create-a-declarations-file
declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme {
    colorPrimary: string;
    colorLink: string;
    colorBgContainer: string;
    colorBgElevated: string;
    colorText: string;
    colorTextSecondary: string;
    colorWhite: string;
    fontSizeXlarge: string;
    fontSizeLarge: string;
    fontSizeMedium: string;
    fontSizeNormal: string;
    fontSizeDefault: string;
    fontSizeSmall: string;
    fontSizeXsmall: string;
    fontWeightRegular: number;
    fontWeightMedium: number;
    fontWeightBold: number;
    gapXsmall: string;
    gapSmall: string;
    gapMedium: string;
    gapLarge: string;
    gapXlarge: string;
  }
}
