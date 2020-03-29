import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Home from "./Pages/Home";
import HowToContribute from "./Pages/HowToContribute";
import GettingHelp from "./Pages/GettingHelp";
import {Routes} from "./Constants/Routes";

function App() {
  return (
      <HashRouter basename="/">
          <Route exact path={Routes.home.link} component={Home} />
          <Route path={Routes.contribute.link} component={HowToContribute} />
          <Route path={Routes.help.link} component={GettingHelp} />
      </HashRouter>
  );
}

export default App;
