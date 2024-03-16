import type { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  colorPrimary: "#000000",
  colorLink: "#1c64ff",
  colorBgContainer: "#f0f0f0",
  colorBgElevated: "#e5e5e5",
  colorText: "#000000",
  colorTextSecondary: "#888888",
  colorWhite: "#ffffff",
};

export const lightTheme: DefaultTheme = {
  ...defaultTheme,
};

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  colorPrimary: "#ededed",
  colorLink: "#48baf7",
  colorBgContainer: "#3d3d3d",
  colorBgElevated: "#333333",
  colorText: "#ffffff",
  colorTextSecondary: "#888888",
};
