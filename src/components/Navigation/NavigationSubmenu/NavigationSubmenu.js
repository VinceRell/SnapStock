import React from 'react';
import classes from './NavigationSubmenu.module.scss';

//component imports
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationSubmenu = () => (
  <ul className={classes.Submenu}>
      <NavigationItem 
        linkName={"Editor's choice"} 
        classStyle={"SubItem"} />
      <NavigationItem 
        linkName={"Afbeeldingen"} 
        classStyle={"SubItem"} />
      <NavigationItem 
        linkName={"Videos"} 
        classStyle={"SubItem"} />
  </ul>
);

export default navigationSubmenu;