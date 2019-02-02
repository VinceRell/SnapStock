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

export default navigationBar;