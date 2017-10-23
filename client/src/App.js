import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Demo1 from "./pages/Demo1";
import Demo2 from "./pages/Demo2";
import Demo3 from "./pages/Demo3";
import DonateButton from "./components/DonateButton";
import NavbarHeader from "./components/NavbarHeader";
import theme from './assets/react-toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import "./assets/react-toolbox/theme.css"



const App = () =>
  <Router>
    <div>
      <ThemeProvider theme={theme}><NavbarHeader /></ThemeProvider>
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
