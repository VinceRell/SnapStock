import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MenuItem.module.scss';

const menuItem = (props) => {
    let styleClasses = props.linkType.split(" ").reduce((line, word)=>{
        return line.concat(classes[word]);
    },[classes.MenuItem]);

    return(
        <li className={styleClasses.join(" ")} >
            <NavLink to={props.routeName}>
                {props.linkName}
            </NavLink>
        </li>
    );
};

export default menuItem;