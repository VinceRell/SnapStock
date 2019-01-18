import React, { Component } from 'react';

//component imports
import Hero from '../../components/Hero/Hero';

class Home extends Component {
    render() {
        return (
          <div>
            <Hero/>
            <p>sub nav</p>
            <p>images</p>
            <p>categories</p>
            <p>footer</p>
          </div>
        );
    }
}


export default Home;