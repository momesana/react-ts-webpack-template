import "styled-components";

// see https://styled-components.com/docs/api#usage-with-typescript
import type { CSSProp } from "styled-components/cssprop";

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
  }
}
