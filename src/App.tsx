import { Suspense, memo } from "react";
import GlobalStyles from "./globalStyles";
import { IntlProvider } from "./components/i18n";
import Test from "./pages/test";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <Suspense fallback="loading">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <IntlProvider>
          <>
            <GlobalStyles />
            <Test />
          </>
        </IntlProvider>
      </QueryClientProvider>
    </Suspense>
  );
}

export default memo(App);
