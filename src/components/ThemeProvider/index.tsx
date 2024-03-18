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
  const [currentThemeName, setCurrentThemeName] =
    useState<Theme>(getStoredTheme());
  const [currentTheme, setCurrentTheme] = useState(() =>
    selectInitialTheme(currentThemeName),
  );

  const selectInitialTheme = useCallback((theme: Theme) => {
    if (theme === "system") {
      return detectSystemTheme();
    } else if (theme === "dark") {
      return darkTheme;
    } else {
      return lightTheme;
    }
  }, []);

  const selectTheme = useCallback(
    (theme: Theme) => {
      setCurrentThemeName(theme);
      localStorage.setItem("theme", theme);
      setCurrentTheme(selectInitialTheme(theme));
    },
    [selectInitialTheme],
  );

  function detectSystemTheme(): DefaultTheme {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return darkTheme;
    } else {
      return lightTheme;
    }
  }

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (currentThemeName === "system") {
        setCurrentTheme(detectSystemTheme());
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
