import { memo } from "react";
import ThemeProvider from "./components/ThemeProvider";
import TestPage from "./pages/test";

function App() {
  return (
    <ThemeProvider>
      <TestPage />
    </ThemeProvider>
  );
}

export default memo(App);
