import type { ReactElement } from "react";
import styled from "styled-components";
import LanguageDropdown from "../components/i18n/LanguageDropdown";
import { FormattedMessage } from "react-intl";

const MainContainer = styled.div`
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainSection = styled.div`
  background: #e5e5e5;
  margin: 40px;
  width: 50%;
  padding: 20px;
`;

const Title = styled.h2`
  color: #888888;
  text-align: center;
`;

export default function TestPage(): ReactElement {
  return (
    <MainContainer>
      <Title>
        <FormattedMessage
          defaultMessage="Title"
          description="A title for the test page"
        />
      </Title>
      <MainSection>
        <LanguageDropdown />
      </MainSection>
    </MainContainer>
  );
}
