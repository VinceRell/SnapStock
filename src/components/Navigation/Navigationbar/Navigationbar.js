import React from 'react';
import { withRouter } from 'react-router-dom';
import classes from './Navigationbar.module.scss';

//component imports
import Logo from '../../Logo/Logo';
import MobileNav from '../MobileNav/MobileNav';
import DesktopNav from '../DesktopNav/DesktopNav';
import Form from '../../../containers/Form/Form';



const navigationBar = (props) => {

    let displayForm = null;

    if(props.location.pathname !== "/") {
        let showSearch = classes.main_header__searchbar_container;
        if(props.showSearchbar) {
            showSearch = [classes.main_header__searchbar_container, classes.display_search].join(" ");
        }
        displayForm = (
            <div className={showSearch}>
                <Form />
            </div>
        );
    }

    return  (
        <header className={classes.main_header}>
            
            <div className={classes.main_header__item_container}>
                <Logo/>
                
                {displayForm}
            </div>

            <nav>
                <MobileNav 
                    isShowing={props.showMenu}
                    pageLocation={props.location.pathname}
                    toggleExplore={props.toggleExploreMenu}
                    toggleUser={props.toggleUserMenu}
                    toggleSearch={props.toggleSearchbar}
                    closeMenu={props.closeMenu}/>
                <DesktopNav 
                    isShowing={props.showMenu}
                    toggleExplore={props.toggleExploreMenu}
                    closeMenu={props.closeMenu}/>

            </nav>

        </header>
    );
}

export default withRouter(navigationBar);