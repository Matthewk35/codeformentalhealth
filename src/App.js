import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Pages/Home";
import HowToContribute from "./Pages/HowToContribute";
import GettingHelp from "./Pages/GettingHelp";

function App() {
  return (
      <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/contribute" component={HowToContribute} />
          <Route path="/help" component={GettingHelp} />
      </BrowserRouter>
  );
}

export default App;
