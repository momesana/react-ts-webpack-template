import {
  createContext,
  useState,
  type PropsWithChildren,
  type ReactElement,
  useContext,
} from "react";
import { ThemeProvider as ScThemeProvider } from "styled-components";
import type { EmptyObject } from "../../types";
import GlobalStyles from "./globalStyles";
import { darkTheme, lightTheme } from "./theme";
import { DefaultTheme } from "styled-components/dist/types";
import { throwError } from "../../utils/errorHandling";

export type Theme = "system" | "light" | "dark";

interface ThemeContextType {
  selectTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function useThemeContext(): ThemeContextType {
  return (
    useContext(ThemeContext) ?? throwError("Theme context must be initialized")
  );
}

export default function ThemeProvider({
  children,
}: PropsWithChildren<EmptyObject>): ReactElement {
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(lightTheme);

  const selectTheme = (theme: string) => {
    if (theme === "system") {
      if (window.matchMedia) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          setCurrentTheme(darkTheme);
        } else {
          setCurrentTheme(lightTheme);
        }
      } else {
        setCurrentTheme(lightTheme);
      }
    } else if (theme === "dark") {
      setCurrentTheme(darkTheme);
    } else {
      setCurrentTheme(lightTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ selectTheme }}>
      <ScThemeProvider theme={currentTheme}>
        <GlobalStyles />
        {children}
      </ScThemeProvider>
    </ThemeContext.Provider>
  );
}
