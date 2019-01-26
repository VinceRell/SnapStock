import React from 'react';
import classes from './Navigationbar.module.scss';

//component imports
import Logo from '../../Logo/Logo';
import MobileNav from '../MobileNav/MobileNav';
import DesktopNav from '../DesktopNav/DesktopNav';



const navigationBar = (props) => (
    <header className={classes.main_header}>
        <Logo />
        <nav>
            <MobileNav 
                exploreMenu={props.toggleExploreMenu}
                userMenu={props.toggleUserMenu}
                show={props.showMenu}
                close={props.closeMenu}/>
            <DesktopNav 
                 exploreMenu={props.toggleExploreMenu}
                 userMenu={props.toggleUserMenu}
                 show={props.showMenu}
                 close={props.closeMenu}/>
        </nav>
    </header>
);

export default navigationBar;