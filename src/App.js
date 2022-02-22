import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Things from "./components/Things/Things";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Things />
      </main>
    </Fragment>
  );
}

export default App;
