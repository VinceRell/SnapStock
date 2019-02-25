import React from 'react';
import classes from './SubMenu.module.scss';

const subMenu = (props) => (
    <ul className={classes.subMenu}>
        {props.children}
    </ul>
);


export default subMenu;