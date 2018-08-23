import React, { Component } from 'react';
import './App.css';

import Clock from './Clock';
import DigitalClock from './DigitalClock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Clocks">
          <div className="DigitalClock">
            <DigitalClock locale="ja" format="YYYY/MM/DD"/>
            <DigitalClock locale="ja" format="HH:mm"/>
          </div>
          <div className="Clock">
            <Clock/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
