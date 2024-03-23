import { lazy } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

const App = lazy(async () => import("./App"));
const containerId = "root";
const container = document.getElementById(containerId);
if (!container) {
  throw Error(`couldn't find element with id ${containerId}!`);
}
const root = createRoot(container);
root.render(
  <ErrorBoundary fallback={<div>shit hit the fan bruv!</div>}>
    <App />
  </ErrorBoundary>,
);
