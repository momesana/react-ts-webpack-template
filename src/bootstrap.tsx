import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

const Index = lazy(async () => import("./index"));
const containerId = "root";
const container = document.getElementById(containerId);
if (!container) {
  throw Error(`couldn't find element with id ${containerId}!`);
}
const root = createRoot(container);
root.render(
  <ErrorBoundary fallback={<div>Something went wrong...</div>}>
    <Suspense fallback="loading">
      <Index />
    </Suspense>
  </ErrorBoundary>,
);
