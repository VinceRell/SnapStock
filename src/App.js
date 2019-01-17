import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//component imports
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" component={Home}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
