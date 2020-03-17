import React, { Component } from 'react';
import MainComponent from './components/MainComponent.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>3 Point Estimation</h2>
        </div>
        <MainComponent />
      </div>
    );
  }
}

export default App;
