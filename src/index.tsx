import { lazy, Suspense } from "react";
import type { ReactElement } from "react";
import { ErrorBoundary } from "react-error-boundary";

const App = lazy(async () => import("./App"));

export default function Index(): ReactElement {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </ErrorBoundary>
  );
}

function Fallback({ error }: { error: Error }): ReactElement {
  return <p>{error.message}</p>;
}
