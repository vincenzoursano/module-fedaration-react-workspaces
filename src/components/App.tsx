import * as React from "react";
import { hot } from "react-hot-loader";
import ErrorBoundary from "./ErrorBoundary";
const Test = React.lazy(() => import("example/Test"));

import "./../assets/scss/App.scss";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <p>Foo to the barz</p>
        <ErrorBoundary>
          <React.Suspense fallback={<></>}>
            <Test />
          </React.Suspense>
        </ErrorBoundary>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
