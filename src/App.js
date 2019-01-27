import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//component imports
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import EditorsChoice from './containers/EditorsChoice/EditorsChoice';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/editors_choice" component={EditorsChoice}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
