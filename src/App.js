import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contributions from "./Components/Contributions";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contributions/>
      </header>
    </div>
  );
}

export default App;
