import React, { Component } from 'react';
import classes from './Layout.module.scss';

//component imports
import NavigationBar from '../../components/Navigation/Navigationbar/Navigationbar';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
     }
}


export default Layout;