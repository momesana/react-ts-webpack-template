import type { ReactElement } from "react";
import { styled } from "styled-components";
import { useIntl } from "./IntlProvider";
import type { SupportedLocale } from ".";
import { supportedLocales } from "../../../lang/supportedLocales";

const Root = styled.span`
  text-transform: uppercase;
  flex-shrink: 0;
  cursor: pointer;
  color: var(--primaryColor);
  user-select: none;
  font-size: var(--font-size-normal);

  & svg {
    margin-left: var(--gap-x-small);
  }
`;

interface LanguageOption {
  key: SupportedLocale;
  text: string;
}

const languageOptionsWithoutAuto: LanguageOption[] = supportedLocales.map(
  locale => ({
    key: locale,
    text: locale.toUpperCase(),
  }),
);

const languageOptions = [
  ...languageOptionsWithoutAuto,
  { key: "AUTO", text: "AUTO" },
];

export default function LanguageDropdown(): ReactElement {
  const intl = useIntl();

  return (
    <Root>
      <select
        id="langSelect"
        onChange={item => {
          intl.changePreferredLocale(
            item.target.value === "AUTO"
              ? undefined
              : (item.target.value as SupportedLocale),
          );
        }}
      >
        {languageOptions.map(item => (
          <option value={item.key} key={item.key}>
            {item.text}
          </option>
        ))}
      </select>
    </Root>
  );
}
