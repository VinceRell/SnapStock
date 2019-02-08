import React from 'react';
import { withRouter } from 'react-router-dom';
import classes from './Navigationbar.module.scss';

//component imports
import Logo from '../../Logo/Logo';
import Form from '../../../containers/Form/Form';
import MobileNav from '../MobileNav/MobileNav';
import DesktopNav from '../DesktopNav/DesktopNav';



const navigationBar = (props) => {
    const { location } = props; 
    let displayForm = null;
    
    if(location.pathname !== "/") {
        displayForm = <Form />
    }

    return  (
        <header className={classes.main_header}>
            <Logo />
            {displayForm}
            <nav>
                <MobileNav 
                    isShowing={props.showMenu}
                    toggleExplore={props.toggleExploreMenu}
                    toggleUser={props.toggleUserMenu}
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