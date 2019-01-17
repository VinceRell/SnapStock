import React from 'react';
import classes from './SubMenu.module.scss';

const subMenu = (props) => (
    <ul className={classes.displaymenu}>
        {props.children}
    </ul>
);


export default subMenu;