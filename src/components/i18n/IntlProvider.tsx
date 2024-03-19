import { useSuspenseQuery } from "@tanstack/react-query";
import type { PropsWithChildren, ReactElement } from "react";
import { createContext, useContext, useMemo, useState } from "react";
import type { IntlShape } from "react-intl";
import {
  IntlProvider as ReactIntlProvider,
  useIntl as useReactIntl,
} from "react-intl";
import { supportedLocales } from "../../../lang/supportedLocales";
import type { EmptyObject } from "../../types";
import { throwError } from "../../utils/errorHandling";

interface LocaleModule {
  default: Record<string, string>;
}

async function dynamicallyLoadLocale({
  queryKey: [locale],
}: {
  queryKey: [SupportedLocale];
}): Promise<Record<string, string>> {
  const { default: messages } = (await import(
    `../../../lang/translations/${locale}`
  )) as LocaleModule;
  return messages;
}

export type SupportedLocale = (typeof supportedLocales)[number];

const defaultLocale: SupportedLocale = "en";
const rtlMap: Partial<Record<SupportedLocale, boolean>> = {
  fa: true,
};

function isRtl(locale: SupportedLocale): boolean {
  return rtlMap[locale] ?? false;
}

function getSupportedLocale(): SupportedLocale {
  const browserLocale = navigator.language as SupportedLocale;
  return supportedLocales.includes(browserLocale)
    ? browserLocale
    : defaultLocale;
}

export interface IntlWrapperProviderContextType {
  supportedLocales: readonly SupportedLocale[];
  defaultLocale: SupportedLocale;
  locale: SupportedLocale;
  rtl: boolean;
  preferredLocale?: SupportedLocale;
  changePreferredLocale: (locale?: SupportedLocale) => void;
}

const IntlWrapperProviderContext = createContext<
  IntlWrapperProviderContextType | undefined
>(undefined);

IntlWrapperProviderContext.displayName = "IntlWrapperProviderContext";

function useIntlWrapper(): IntlWrapperProviderContextType {
  return (
    useContext(IntlWrapperProviderContext) ??
    throwError(
      `${IntlWrapperProviderContext.displayName} context value must be defined`,
    )
  );
}

type IntlProviderContextType = IntlWrapperProviderContextType &
  Exclude<IntlShape, "locale" | "defaultLocale">;

const IntlProviderContext = createContext<IntlProviderContextType | undefined>(
  undefined,
);

IntlProviderContext.displayName = "IntlProviderContext";

export function useIntl(): IntlProviderContextType {
  return (
    useContext(IntlProviderContext) ??
    throwError(
      `${IntlProviderContext.displayName} context value must be defined`,
    )
  );
}

function IntlProvider({
  children,
}: PropsWithChildren<EmptyObject>): ReactElement {
  const internalIntl = useIntlWrapper();
  const reactIntl = useReactIntl();

  const value = useMemo(() => {
    return { ...reactIntl, ...internalIntl };
  }, [internalIntl, reactIntl]);

  return (
    <IntlProviderContext.Provider value={value}>
      {children}
    </IntlProviderContext.Provider>
  );
}

export default function IntlernalIntlProvider({
  children,
}: PropsWithChildren<EmptyObject>): ReactElement {
  const [preferredLocale, changePreferredLocale] = useState<SupportedLocale>();
  const locale = preferredLocale ?? getSupportedLocale();
  const rtl = isRtl(locale);

  const { data: messages } = useSuspenseQuery({
    queryKey: [locale],
    queryFn: dynamicallyLoadLocale,
  });

  const value = useMemo(() => {
    return {
      rtl,
      supportedLocales,
      defaultLocale,
      locale,
      preferredLocale,
      changePreferredLocale,
    };
  }, [rtl, locale, preferredLocale, changePreferredLocale]);

  return (
    <IntlWrapperProviderContext.Provider value={value}>
      <ReactIntlProvider
        messages={messages}
        locale={locale}
        defaultLocale={defaultLocale}
      >
        <IntlProvider>{children}</IntlProvider>
      </ReactIntlProvider>
    </IntlWrapperProviderContext.Provider>
  );
}
