import { lazy, Suspense } from "react";
import type { ReactElement } from "react";
import { ErrorBoundary } from "react-error-boundary";

const App = lazy(async () => import("./App"));

export default function Index(): ReactElement {
  return (
    <ErrorBoundary fallback={<div>shit hit the fan bruv!</div>}>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </ErrorBoundary>
  );
}
