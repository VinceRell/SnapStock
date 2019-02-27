import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//component imports
import asyncComponent from './hoc/AsyncComponent';
import Layout from './containers/Layout/Layout';
import { withAuthentication } from './components/Session/Session';
import UnknownPath from './components/UnknownPath/UnknownPath';

// user imported async component to lazyload routes
const AsyncHome = asyncComponent(() => import ('./containers/Home/Home'));
const AsyncEditorsChoice = asyncComponent(() => import ('./containers/EditorsChoice/EditorsChoice'));
const AsyncMainGallery = asyncComponent(() => import ('./containers/MainGallery/MainGallery'));
const AsyncSignIn = asyncComponent(() => import ('./containers/Auth/SignIn/SignIn'));
const AsyncSignUp = asyncComponent(() => import ('./containers/Auth/SignUp/SignUp'));
const AsyncLogout = asyncComponent(() => import ('./containers/Auth/Logout/Logout'));

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={AsyncHome} />
            <Route path="/signup" component={AsyncSignUp} exact />
            <Route path="/signin" component={AsyncSignIn} exact />
            <Route path="/signout" component={AsyncLogout} exact />
            <Route path="/gallery" component={AsyncMainGallery} />
            <Route path="/editors_choice" component={AsyncEditorsChoice} />
            <Route component={UnknownPath} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default withAuthentication(App);
