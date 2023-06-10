import { memo } from "react";
import styled from "styled-components";
import GlobalStyles from "./globalStyles";

const Title = styled.h1`
  color: #666;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Title css="color: red">Welcome</Title>
      <p>Use this as a starting point to develop your own application :-)</p>
    </>
  );
}

export default memo(App);
