import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Demo1 from "./pages/Demo1";
import Demo2 from "./pages/Demo2";
import Demo3 from "./pages/Demo3";
import DonateButton from "./components/DonateButton";

const App = () =>
  <Router>
    <div>
      <DonateButton />
      <Demo1 />
      <Demo3 />
      <Demo2 />
      {/* <Switch>
        <Route exact path="/" component={} />
      </Switch> */}
    </div>
  </Router>;

export default App;
