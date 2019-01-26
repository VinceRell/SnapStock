import React, { Component } from 'react';
import { updatedObject } from '../../shared/utility';

//component imports
import NavigationBar from '../../components/Navigation/Navigationbar/Navigationbar';
import Footer from '../../components/Footer/Footer';


class Layout extends Component {
    constructor() {
        super();
        this.state = {
            showMenu: {
                user: false,
                explore: false
            }
        };
    }

    toggleExploreMenuHandler = () => {
        const updatedMenu = updatedObject(this.state.showMenu, {
            user: false,
            explore: !this.state.showMenu.explore
        });

        this.setState({showMenu: updatedMenu});
    }

    toggleUserMenuHandler = () => {
        const updatedMenu = updatedObject(this.state.showMenu, {
            user: !this.state.showMenu.user,
            explore: false
        });

        this.setState({showMenu: updatedMenu});
    }

    closeMenuHandler = () => {
        const updatedMenu = updatedObject(this.state.showMenu, {
            user: false,
            explore: false
        });

        this.setState({showMenu: updatedMenu});
    }
    


    render() {
        return (
            <React.Fragment>
                <NavigationBar 
                    toggleExploreMenu={this.toggleExploreMenuHandler} 
                    toggleUserMenu={this.toggleUserMenuHandler}
                    showMenu={this.state.showMenu}
                    closeMenu={this.closeMenuHandler}/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </React.Fragment>
        );
     }
}


export default Layout;