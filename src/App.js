import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//component imports
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import EditorsChoice from './containers/EditorsChoice/EditorsChoice';
import MainGallery from './containers/MainGallery/MainGallery';
import SinglePage from './containers/SinglePage/SinglePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/gallery" component={MainGallery}/>
            <Route path="/editors_choice" component={EditorsChoice}/>
            <Route path="/:image" exact component={SinglePage}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
