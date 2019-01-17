import React from 'react';
import classes from './Navigationbar.module.scss';

//component imports
import Logo from '../../Logo/Logo';
import MobileNav from '../MobileNav/MobileNav';
import DesktopNav from '../DesktopNav/DesktopNav';



const navigationBar = () => (
    <header className={classes.main_header}>
        <Logo />
        <nav>
            <MobileNav />
            <DesktopNav />
        </nav>
    </header>
);

export default navigationBar;