import {
  createContext,
  useState,
  type PropsWithChildren,
  type ReactElement,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { ThemeProvider as ScThemeProvider } from "styled-components";
import type { EmptyObject } from "../../types";
import GlobalStyles from "./globalStyles";
import { darkTheme, lightTheme } from "./theme";
import type { DefaultTheme } from "styled-components/dist/types";
import { throwError } from "../../utils/errorHandling";

export type Theme = "system" | "light" | "dark";
const supportedThemes: Theme[] = ["system", "light", "dark"];

interface ThemeContextType {
  selectTheme: (theme: Theme) => void;
  supportedThemes: Theme[];
  currentThemeName: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function useThemeContext(): ThemeContextType {
  return (
    useContext(ThemeContext) ?? throwError("Theme context must be initialized")
  );
}

const getStoredTheme = (): Theme => {
  let theme = localStorage.getItem("theme") as Theme | null;
  if (theme === null) {
    localStorage.setItem("theme", "system");
    theme = "system";
  }
  return theme;
};

export default function ThemeProvider({
  children,
}: PropsWithChildren<EmptyObject>): ReactElement {
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(lightTheme);
  const [currentThemeName, setCurrentThemeName] =
    useState<Theme>(getStoredTheme());

  const selectTheme = useCallback((theme: Theme) => {
    if (theme === "system") {
      detectSystemTheme();
    } else if (theme === "dark") {
      setCurrentTheme(darkTheme);
    } else {
      setCurrentTheme(lightTheme);
    }
    localStorage.setItem("theme", theme);
    setCurrentThemeName(theme);
  }, []);

  const detectSystemTheme = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setCurrentTheme(darkTheme);
    } else {
      setCurrentTheme(lightTheme);
    }
  };

  useEffect(() => {
    selectTheme(getStoredTheme());
  }, [selectTheme]);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (currentThemeName === "system") {
        detectSystemTheme();
      }
    };
    mediaQueryList.addEventListener("change", handleChange);
    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, [currentThemeName]);

  return (
    <ThemeContext.Provider
      value={{
        selectTheme,
        supportedThemes,
        currentThemeName,
      }}
    >
      <ScThemeProvider theme={currentTheme}>
        <GlobalStyles />
        {children}
      </ScThemeProvider>
    </ThemeContext.Provider>
  );
}
