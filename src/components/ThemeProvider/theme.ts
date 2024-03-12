import type { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  colorPrimary: "#000000",
  colorLink: "#1c64ff",
  colorBgContainer: "#f0f0f0",
  colorBgElevated: "#e5e5e5",
  colorText: "#000000",
  colorTextSecondary: "#888888",
  colorWhite: "#ffffff",
  fontSizeXlarge: "2.1429em",
  fontSizeLarge: "1.4286em",
  fontSizeMedium: "1.2857em",
  fontSizeNormal: "1.1429em",
  fontSizeDefault: "1em",
  fontSizeSmall: "0.9286em",
  fontSizeXsmall: "0.8571em",
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  gapXsmall: "4px",
  gapSmall: "8px",
  gapMedium: "12px",
  gapLarge: "16px",
  gapXlarge: "32px",
};

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  colorText: "#ffffff",
  colorBgContainer: "#000000",
};
