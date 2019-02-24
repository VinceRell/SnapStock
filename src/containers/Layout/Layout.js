import React, { Component } from 'react';
import { updatedObject } from '../../shared/utility';

//component imports
import NavigationBar from '../../components/Navigation/Navigationbar/Navigationbar';
import Footer from '../../components/Footer/Footer';


class Layout extends Component {
    state = {
        showMenu: {
            user: false,
            explore: false
        },
        displaySearch: false,
        isSignedIn: false
    }

    toggleExploreMenuHandler = () => {
        const updatedMenu = updatedObject(this.state.showMenu, {
            user: false,
            explore: !this.state.showMenu.explore
        });

        this.setState({showMenu: updatedMenu}, () => this.closeMenuHandler);
    }

    toggleUserMenuHandler = () => {
        const updatedMenu = updatedObject(this.state.showMenu, {
            user: !this.state.showMenu.user,
            explore: false
        });

        this.setState({showMenu: updatedMenu}, () => this.closeMenuHandler);
    }

    toggleSearchHandler = () => {
        this.setState({displaySearch: !this.state.displaySearch});
    }

    closeMenuHandler = () => {
        const updatedMenu = updatedObject(this.state.showMenu, {
            user: false,
            explore: false
        });

        this.setState({showMenu: updatedMenu, displaySearch: false});
    }

   

    render() {
        return (
            <React.Fragment>
                <NavigationBar 
                    toggleExploreMenu={this.toggleExploreMenuHandler} 
                    toggleUserMenu={this.toggleUserMenuHandler}
                    toggleSearchbar={this.toggleSearchHandler}
                    closeMenu={this.closeMenuHandler}
                    showMenu={this.state.showMenu}
                    showSearchbar={this.state.displaySearch}
                    userSignIn={this.state.isSignedIn}/>
                <main onClick={this.closeMenuHandler}>
                    {this.props.children}
                </main>
                <Footer/>
            </React.Fragment>
        );
     }
}


export default Layout;