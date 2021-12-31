import React from 'react';
import './App.css';

import Count from './Count';
import Details from './Details';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        Hello world
        <Count />
        <Details name="Shisir"/>
        <Details name ="Humagain"/>
        <Details/>
      </div>
    );
  }
}

export default App;