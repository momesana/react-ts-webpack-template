import { memo } from "react";
import styled from "styled-components";
import ThemeProvider from "./components/ThemeProvider";
import TestPage from "./pages/test";

const Title = styled.h1`
  color: #666;
`;

function App() {
  return (
    <ThemeProvider>
      {/* <Title>Welcome</Title>
      <p>Use this as a starting point to develop your own application :-)</p> */}
      <TestPage />
    </ThemeProvider>
  );
}

export default memo(App);
