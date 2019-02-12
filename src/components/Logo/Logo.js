import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Logo.module.scss';

const Logo = () => (
        <div className={classes.Logo}>
            <Link to="/">
                <h1 className={classes.Logo__title}>SnapStock</h1>
            </Link>
        </div>
);


export default Logo;