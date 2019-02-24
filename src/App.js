import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//component imports
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import EditorsChoice from './containers/EditorsChoice/EditorsChoice';
import MainGallery from './containers/MainGallery/MainGallery';
import SignUp from './containers/Auth/SignUp/SignUp';
import SignIn from './containers/Auth/SignIn/SignIn';
import Logout from './containers/Auth/Logout/Logout';
import { withAuthentication } from './components/Session/Session';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={SignUp} exact />
            <Route path="/signin" component={SignIn} exact />
            <Route path="/signout" component={Logout} exact />
            <Route path="/gallery" component={MainGallery} />
            <Route path="/editors_choice" component={EditorsChoice} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default withAuthentication(App);
