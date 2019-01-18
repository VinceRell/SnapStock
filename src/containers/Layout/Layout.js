import React, { Component } from 'react';


//component imports
import NavigationBar from '../../components/Navigation/Navigationbar/Navigationbar';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar />
                <main>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
     }
}


export default Layout;