import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withFirebase } from '../../../components/Firebase';

class Logout extends Component {
  
  componentDidMount() {
    this.props.firebase.doSignOut();
  }

  render() {
    return <Redirect to="/" />
  }

}

export default withFirebase(Logout);
