import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Demo1 from "./pages/Demo1";
import Demo2 from "./pages/Demo2";
import Demo3 from "./pages/Demo3";
import Demo4 from "./pages/Demo4";
import Demo5 from "./pages/Demo5";
import Demo6 from "./pages/Demo6";
import Demo7 from "./pages/Demo7";
import Splash from "./components/Splash"
import DonateButton from "./components/DonateButton";
import NavbarHeader from "./components/NavbarHeader";
import theme from './assets/react-toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import InputTest from './components/InputTest'
import "./assets/react-toolbox/reset.css"
import "./assets/react-toolbox/theme.css"



const App = () =>
  <Router>
    <div>
      <ThemeProvider theme={theme}><NavbarHeader /></ThemeProvider>
      
      <Splash />
      <Demo1 />
      <Demo3 />
      <Demo2 />
      <Demo4 />
      <Demo5 />
      <Demo6 />
      <Demo7 />
      <ThemeProvider theme={theme}><InputTest /></ThemeProvider>
      {/* <Switch>
        <Route exact path="/" component={} />
      </Switch> */}
    </div>
  </Router>;

export default App;
