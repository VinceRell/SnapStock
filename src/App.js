import React, { Component } from 'react';

//component imports
import Navigationbar from './components/Navigation/Navigationbar/Navigationbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navigationbar />
          <p>hero section</p>
          <p>sub nav</p>
          <p>images</p>
          <p>categories</p>
          <p>footer</p>
      </div>
    );
  }
}

export default App;
