import React, { Component } from 'react';
import MainComponent from './components/MainComponent.js';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar sticky-top navbar-light bg-light">
          <a className="navbar-brand">Estimator App - 3 point estimation</a>
        </nav>
        <MainComponent />
      </div>
    );
  }
}

export default App;
