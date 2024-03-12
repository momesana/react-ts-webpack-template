import { ReactElement, useState } from "react";
import styled from "styled-components";
import { useThemeContext } from "../components/ThemeProvider";

const MainContainer = styled.div`
  background: var(--color-bg-container);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainSection = styled.div`
  background: var(--color-bg-elevated);
  margin: var(--gap-large);
  width: 50%;
  padding: var(--gap-medium);
`;

const Header = styled.div`
  background: var(--color-bg-elevated);
  display: flex;
`;

const Menu = styled.ul`
  display: flex;
  gap: var(--gap-x-large);
  padding: var(--gap-x-small);

  a {
    text-decoration: none;
  }
`;

const MainTitle = styled.h1`
  color: var(--color-text);
  text-align: center;
`;

const SubTitle = styled.h2`
  color: var(--color-text-secondary);
  text-align: center;
`;

const Link = styled.a`
  color: var(--color-link);
`;

export default function TestPage(): ReactElement {
  const [seletedTheme, setSeletedTheme] = useState<string>();

  const themeContext = useThemeContext();

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSeletedTheme(event.target.value);
    themeContext.selectTheme(event.target.value);
  };

  return (
    <MainContainer>
      <MainTitle>The Main Title</MainTitle>
      <SubTitle>This page has been created for testing themes</SubTitle>
      <Header>
        <Menu>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <li>
            <Link href="#">About us</Link>
          </li>
        </Menu>

        <select id="mySelect" value={seletedTheme} onChange={handleThemeChange}>
          <option value="">Select...</option>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          <option value="system">System</option>
        </select>
      </Header>
      <MainSection>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          facilis repudiandae enim corporis quod molestias eius nostrum quos
          dolore, ipsum animi quo, in neque, architecto iure sed ratione
          recusandae optio. Cumque officiis tempore culpa tenetur? Ipsa quam
          obcaecati nisi quae labore aperiam recusandae aliquam quibusdam,
          quaerat dolorem, veniam in neque? Et beatae voluptas mollitia quod
          unde sint odit dolorum. Fugiat! Temporibus et aspernatur laudantium
          dolores ex illum quis, amet consectetur ipsa, at delectus voluptatibus
          enim obcaecati quod. Beatae aperiam, atque delectus incidunt suscipit,
          nemo error minus tempora quos, saepe obcaecati.
        </p>
      </MainSection>
    </MainContainer>
  );
}
