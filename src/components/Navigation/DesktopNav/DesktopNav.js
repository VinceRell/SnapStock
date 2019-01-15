import React from 'react';
import classes from './DesktopNav.module.scss';

//component imports
import NavigationItem from '../NavigationItem/NavigationItem';
import NavigationSubmenu from '../NavigationSubmenu/NavigationSubmenu';

const desktopNav = () => (
    <ul className={classes.DesktopNav}>
        <NavigationItem linkName={"Link"} classStyle={"NavItem"} >
            <NavigationSubmenu/>
        </NavigationItem>

        <NavigationItem linkName={"Aanmelden"} classStyle={"NavItem"} />

        <NavigationItem linkName={"Registreren"} classStyle={"NavItem"} />
    </ul>
);

export default desktopNav;