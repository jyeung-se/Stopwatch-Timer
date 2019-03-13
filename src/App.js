import React, { Component } from 'react';
import './App.scss';
import Timer from './components/Timer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        < Timer />
      </div>
    );
  }
}

export default App;
