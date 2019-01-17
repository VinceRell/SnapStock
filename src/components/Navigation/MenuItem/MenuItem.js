import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MenuItem.module.scss';

const menuItem = (props) => (
    <li className={[classes.MenuItem, classes[props.linkType]].join(" ")}>
        <NavLink to="/">
            {props.linkName}
        </NavLink>
        {props.children}
    </li>
);

export default menuItem;