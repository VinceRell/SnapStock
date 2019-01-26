import React, { Component } from 'react';


//component imports
import NavigationBar from '../../components/Navigation/Navigationbar/Navigationbar';
import Footer from '../../components/Footer/Footer';


class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar />
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </React.Fragment>
        );
     }
}


export default Layout;