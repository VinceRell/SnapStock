import React from 'react';
import classes from './MobileNav.module.scss';

//component imports
import NavigationItem from '../NavigationItem/NavigationItem';
import NavigationSubmenu from '../NavigationSubmenu/NavigationSubmenu';

const mobileNav = () => (
    <ul className={classes.MobileNav}>
        <NavigationItem linkName={"user"} classStyle={"NavItem"}>
            <ul>
                <NavigationItem linkName={"Aanmelden"} classStyle={"SubItem"}/>

                <NavigationItem linkName={"Registreren"} classStyle={"SubItem"}/>
            </ul>
        </NavigationItem>

        <NavigationItem linkName={"Link"} classStyle={"NavItem"}>
            <NavigationSubmenu/>
        </NavigationItem>
    </ul>
);

export default mobileNav;